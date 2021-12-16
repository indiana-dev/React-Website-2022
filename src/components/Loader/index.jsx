import gsap, { selector } from "gsap/all";
import React, { useEffect, useRef } from "react"
import './styles.scss'

export default function Loader() {
    const loaderRef = useRef()
    const loaderSelect = selector(loaderRef)

    // wait until DOM has been rendered
    useEffect(() => {
        let tl = gsap.timeline()
        tl.to(loaderSelect('.dot'),  {duration: 1.25, ease: "elastic", stagger: 0.1, y: 0, opacity: 1 })
        tl.to(loaderRef.current, { y: "100%", ease: v => Math.pow(v, 5), duration: 1 }, "<+0.5");
    });

    return <div className="loader" ref={loaderRef}>
        { new Array(4).fill(0).map((_,i) =>
            <div className="dot" key={'dot_' + i}></div>
        )}
       
    </div>
}