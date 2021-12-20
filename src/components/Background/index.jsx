import React from 'react';
import { OrthographicCamera, shaderMaterial } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { useState, useRef } from 'react'
import { Matrix4, Vector3 } from 'three'
import { Vector2 } from 'three'
import { Color } from 'three'
import './styles.scss'

function radians( degrees ) {
    return degrees * Math.PI / 180.0;
}

function lookAt( eye, at, up )
{
    if ( eye.equals(at) ) {
        return new Matrix4()
    }

    var v = at.sub(eye).normalize()
    var n = v.clone().cross(up).normalize()
    var u = n.clone().cross(v).normalize()
    v.negate()

    var result = new Matrix4()
    result.set(
        n.x, n.y, n.z, -n.dot(eye),
        u.x, u.y, u.z, -u.dot(eye),
        v.x, v.y, v.z, -v.dot(eye),
        0.0,  0.0,  0.0,  1.0
    )

    return result;
}

class Camera {
    constructor() {
        this.pos = new Vector3(-1, 1, 1)
        this.yaw = -90
        this.pitch = 0
        this.speed = 1.
        this.rotationSpeed = 1

        this.updateViewMatrix()
    }

    updateViewMatrix() {
        this.front = new Vector3(
            Math.cos(radians(this.pitch)) * Math.cos(radians(this.yaw)),
            Math.sin(radians(this.pitch)),
            Math.cos(radians(this.pitch)) * Math.sin(radians(this.yaw))
        ).normalize()
        this.right = this.front.clone().cross(new Vector3(0, 1, 0)).normalize()
        this.up = this.right.clone().cross(this.front).normalize()

        this.viewMatrix = lookAt(this.pos.clone(), this.pos.clone().add(this.front), this.up.clone()).transpose()
    }
}

const ColorShiftMaterial = shaderMaterial(
    { time: 0, color: new Color(0.2, 0.0, 0.1), view_matrix: undefined, camPos: [1.4, 1.5, 1.6], uResolution: undefined,
    },
    // vertex shader
    `
      varying vec2 vUv;
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vUv = uv;
      }
    `,
    // fragment shader
    `
      uniform float time;
      uniform vec3 color;
      uniform vec2 uResolution;
      uniform vec3 camPos;
      uniform mat4 view_matrix;
      varying vec2 vUv;

      // DISTANCE FUNCTIONS

    float fRepeatedSphere(vec3 p, float r) {
        vec3 c = vec3(10.);
        vec3 q = mod(p+0.5*c,c)-0.5*c;
        return length(q) - r;
    }

    // SCENE

    float sceneSDF(vec3 p) {
        return fRepeatedSphere(p, 1.);
    }
      // RAYMARCH FUNCTIONS

      const float EPSILON = 0.01;
    const float MAX_DIST = 1000.;
    const int MAX_MARCHING_STEPS = 1000;

    vec3 rayDirection(float fieldOfView, vec2 size, vec2 fragCoord) {
        vec2 xy = fragCoord - size / 2.0;
        float z = size.y / tan(radians(fieldOfView) / 2.0);
        return normalize(vec3(xy, -z));
    }

    vec2 shortestDistanceToSurface(vec3 eye, vec3 marchingDirection, float start, float end) {
        float depth = start;
        for (int i = 0; i < MAX_MARCHING_STEPS; i++) {
            vec3 point = eye + depth * marchingDirection;
            float dist = min(point.y, sceneSDF(point));

            if (point.y < EPSILON) {
                return vec2(depth, 1.);
            }
            
            if (dist < EPSILON) {
                return vec2(depth, 0.);
            }
            
            depth += dist;
            if (depth >= end) {
                return vec2(end, -2.);
            }
        }
        return vec2(end, -1.);
    }

      void main() {
        vec3 viewDir = rayDirection(60., uResolution, vUv*uResolution);
        vec3 worldDir = (view_matrix * vec4(viewDir, 0.)).xyz;
        vec2 result = shortestDistanceToSurface(camPos, worldDir, 0., MAX_DIST);
        float dist = result.x;
        float type = result.y;
        vec3 p = camPos + dist * worldDir;

        // Didn't hit anything
        if (type < 0.) {
            gl_FragColor = vec4(0.,0.,0.,1.);//vec4(.2, .2, .2, 1.);
            return;
        }
        
        float d = dist/((sin(time)+1.)*250.+200.) + 0.5/dist;
        vec3 finalColor = mix(vec3(d, 0., 0.), vec3(0.), dist/800.);
        gl_FragColor = vec4(finalColor, 1.);
      }
    `
  )
    

  extend({ ColorShiftMaterial })

function Render() {
    const res = new Vector2(window.innerWidth, window.innerHeight)
    let [cam, setCam] = useState(new Camera()) 
    const timeRef = useRef(null)

    useFrame(({clock}) => {
        timeRef.current.time = clock.getElapsedTime()
        timeRef.current.camPos.z = -clock.getElapsedTime()
    })

    function changeUniform() {
        console.log('click', cam)
        cam.pos.x = 0.5
        cam.pos.y=2
        cam.pos.z = 0.1
        cam.updateViewMatrix()
        setCam({...cam})
    }

    return <OrthographicCamera makeDefault args={[ - 1, 1, 1, - 1, 0, 1]} onClick={changeUniform}>
        <mesh>
            <planeBufferGeometry args={[window.innerWidth, window.innerHeight]} />
            <colorShiftMaterial attach="material" color="hotpink" camPos={cam.pos} time={0} view_matrix={cam.viewMatrix} uResolution={res} ref={timeRef} />
        </mesh>
        </OrthographicCamera>
}

export default function Background() {
    return <div className="bg">
        <Canvas>
            <Render />
        </Canvas>
    </div>
}