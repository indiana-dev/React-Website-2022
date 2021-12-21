import React, { useEffect } from 'react';
import { OrthographicCamera, shaderMaterial } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { useState, useRef } from 'react'
import { Matrix4, Vector3 } from 'three'
import { Vector2 } from 'three'
import { Color } from 'three'
import './styles.scss'
import ScrollTrigger from 'gsap/ScrollTrigger';
import FragmentShader from './fragment'

const base_speed = 0.02

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
        this.pos = new Vector3(-3, 1, 1)
        this.vel = new Vector3(0, 0, base_speed)
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
    `, FragmentShader
  )
    

  extend({ ColorShiftMaterial })

function Render() {
    const res = new Vector2(window.innerWidth, window.innerHeight)
    let [cam, setCam] = useState(new Camera()) 
    const timeRef = useRef(null)

    useFrame(({clock}) => {
        timeRef.current.time = clock.getElapsedTime()

        cam.pos.sub(cam.vel)

        if (Math.abs(cam.vel.z) > base_speed) {
            cam.vel.z *= 0.98
        }
    })

    function changeUniform() {
        // console.log('click', cam)
        // cam.pos.x = 0.5
        // cam.pos.y=2
        // cam.pos.z = 0.1
        // cam.updateViewMatrix()
        // setCam({...cam})
    }

    useEffect(() => {
        ScrollTrigger.create({
            onUpdate: (self) => {
                const max = 3
                let vel = self.getVelocity()
                vel = Math.sqrt(Math.abs(vel))*Math.sign(vel)*0.0005

                cam.vel.z = Math.max(Math.min(cam.vel.z+vel, max), -max)
            }
        })
    })

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