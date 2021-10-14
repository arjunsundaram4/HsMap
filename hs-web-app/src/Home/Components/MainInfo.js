import React, {useEffect,} from 'react';
import '../Home.css';
import {gsap} from "gsap";
export const MainInfo=()=>{
    useEffect(()=>{
        gsap.from('#section2 .section2Title',{opacity: 0,y: -100,duration:1,ease: "linear",scrollTrigger:{
                trigger:'#section2',
                start: "top 70%",
                end: "bottom bottom",
                scrub: true,
            }});
        gsap.from('#section2 .aboutCard',{opacity: 0,x: -100,duration:1,ease: "linear",scrollTrigger:{
                trigger:'#section2 .aboutCard',
                start: "top 70%",
                end: "50% bottom",
                scrub: true
            }});
        gsap.from('#section2 .tableauCard',{opacity: 0,y: -100,duration:1,ease: "linear",scrollTrigger:{
                trigger:'#section2 .tableauCard',
                start: "top 70%",
                end: "50% bottom",
                scrub: true
            }});
        gsap.from('#section2 .mapCard',{opacity: 0,y: 100,duration:1,ease: "linear",scrollTrigger:{
                trigger:'#section2 .mapCard',
                start: "top 70%",
                end: "50% bottom",
                scrub: true
            }});
        gsap.from('#section2 .modelingCard',{opacity: 0,x: 100,duration:1,ease: "linear",scrollTrigger:{
                trigger:'#section2 .modelingCard',
                start: "top 70%",
                end: "50% bottom",
                scrub: true
            }});
    })
    return (
        <div id={"section2"}>
            <div>
                <p className="section2Title">Let us take you through a journey of ways to look at the current worldwide pandemic through the lens of Hope-Simpson. Here is what you can find on our other pages:</p>
                <div className={"homeCards"}>
                    <div className={"cards aboutCard"}>
                        <img src={'/assets/about.png'} style={{backgroundColor: "#143642"}}/>
                        <div className={"cardTitle"}>About</div>
                        <div className={"cardContent"}>Information on the background inspiration, which is the life work of Robert Edgar Hope-Simpson (1908-2003), a general practitioner who studied influenza cases around the world for sixty years. Also, an explanation of the Hope-Simpson concept and about our COVID-19 data.</div>
                    </div>
                    <div className={"cards tableauCard"}>
                        <img src={'/assets/tableau.png'} style={{backgroundColor: "#0F8B8D"}}/>
                        <div className={"cardTitle"}>Tableau Map</div>
                        <div className={"cardContent"}>Using Tableau, you can take a Hope-Simpson inspired look at COVID-19 through a sample of four latitude zones around the world. We compared and contrasted different regions and showed a north-to-south longitudinal slice of the Americas.</div>
                    </div>
                    <div className={"cards mapCard"}>
                        <img src={'/assets/map.png'} style={{backgroundColor: "#EC9A29"}}/>
                        <div className={"cardTitle"}>GDS Map</div>
                        <div className={"cardContent"}>Using Google Data Studio, you can dive into a detailed exploration of the data by date, country, latitude, and longitude. We can see another view of the four-zones concept and the longitudinal slice of the Americas.</div>
                    </div>
                    <div className={"cards modelingCard"}>
                        <img src={'/assets/modeling.png'} style={{backgroundColor: "#A8201A"}}/>
                        <div className={"cardTitle"}>Modeling</div>
                        <div className={"cardContent"}>See early work of a compartmental network model of the virus spread and a Fourier-based analysis of the reported cases across the world.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}