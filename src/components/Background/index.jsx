import React, { useEffect } from 'react';
import { OrthographicCamera, shaderMaterial } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { useState, useRef } from 'react'
import { Matrix4, Vector3 } from 'three'
import { Color } from 'three'
import ScrollTrigger from 'gsap/ScrollTrigger';
import FragmentShader from './fragment'
import gsap from 'gsap/all';
import './styles.scss'

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

        let abs = Math.abs(this.pitch%360)
        let upsideDown = abs >= 90 && abs <= 270

        this.viewMatrix = lookAt(this.pos.clone(), this.pos.clone().add(this.front), upsideDown ? this.up.clone().negate() : this.up.clone()).transpose()
    }
}

const ColorShiftMaterial = shaderMaterial({ 
        time: 0, 
        color: new Color(0.2, 0.0, 0.1), 
        view_matrix: undefined, 
        camPos: [1.4, 1.5, 1.6], 
        uResolution: undefined, 
        progress: 0
    }, `
      varying vec2 vUv;

      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vUv = uv;
      }
    `, FragmentShader
  )
    
extend({ ColorShiftMaterial })

function Render({
    current,
    showDetails
}) {
    const [resolution, setResolution] = useState([window.innerWidth, window.innerHeight])
    const timeRef = useRef(null)
    const camera = useRef(new Camera()) 
    let cam = camera.current

    useEffect(() => {
        console.log('Current', current)
        const animDuration = 0.5
        if (current === 1) gsap.to(timeRef.current, {progress: 1, duration: animDuration, ease: 'power2.inOut'})
        else if (current === 0) gsap.to(timeRef.current, {progress: 0, duration: animDuration, ease: 'power2.inOut'})
    }, [current])

    useFrame(({clock}) => {
        timeRef.current.time = clock.getElapsedTime()

        cam.pitch -= Math.abs(cam.vel.z) <= base_speed ? 0. : cam.vel.z
        cam.updateViewMatrix()
        timeRef.current.view_matrix = cam.viewMatrix

        cam.pos.sub(cam.vel)

        if (Math.abs(cam.vel.z) > base_speed) {
            cam.vel.z *= 0.98
        }
    })

    useEffect(() => {
        ScrollTrigger.create({
            onUpdate: (self) => {
                const max = 0.25
                let vel = self.getVelocity()
                vel = Math.sqrt(Math.abs(vel))*Math.sign(vel)*0.0005
        
                cam.vel.z = Math.max(Math.min(cam.vel.z+vel, max), -max)
            }    
        })
    
        function windowsResize() {
            setResolution([window.innerWidth, window.innerHeight])
        }

        window.addEventListener('resize', windowsResize)

        return () => {
            window.removeEventListener('resize', windowsResize)
        }
    }, [cam])

    useEffect(() => {
        // function mouseMove({ screenX: x }) {
        //     if (window.scrollY > window.innerHeight/2 || showDetails) return
        //     const animDuration = 0.5
        //     if (x > window.innerWidth/2 && timeRef.current.progress === 0) {
        //         gsap.to(timeRef.current, {progress: 1, duration: animDuration, ease: 'power2.inOut'})
        //     } else if (x < window.innerWidth/2 && timeRef.current.progress === 1) {
        //         gsap.to(timeRef.current, {progress: 0, duration: animDuration, ease: 'power2.inOut'})
        //     }
        // }

        // window.addEventListener('mousemove', mouseMove)

        // return () => {
        //     window.removeEventListener('mousemove', mouseMove)
        // }
    }, [showDetails])

    console.log('Background Render')
    return <OrthographicCamera makeDefault args={[-1, 1, 1, -1, 0, 1]}>
        <mesh>
            <planeBufferGeometry args={resolution} />
            <colorShiftMaterial attach="material"
                camPos={cam.pos} 
                time={0} 
                view_matrix={cam.viewMatrix}
                uResolution={resolution} 
                progress={0}
                ref={timeRef} 
            />
        </mesh>
        </OrthographicCamera>
}

export default function Background({
    current,
    showDetails
}) {
    return <div className="bg">
        <Canvas>
            <Render current={current} showDetails={showDetails} />
        </Canvas>
    </div>
}