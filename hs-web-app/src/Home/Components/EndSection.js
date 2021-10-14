import React, {useEffect,} from 'react';
import '../Home.css';
import {gsap} from "gsap";
export const EndSection=()=>{
    useEffect(()=>{
        gsap.from('#section3 .endText',{opacity: 0,y: 200,duration:1,ease: "linear",scrollTrigger:{
                trigger:'#section3',
                start: "top bottom",
                end: "bottom bottom",
                scrub: true
            }});
    })
    return (
        <div id={"section3"}>
            <div className={"endText"}>
                <div>Finally, our site is constantly redesigned so it might be a bit unresponsive from time to time.  But one of our great design features is that you can download any of the data yourself to continue your own exploration.</div>
                <div>Stay safe!</div>
            </div>
        </div>
    )
}
