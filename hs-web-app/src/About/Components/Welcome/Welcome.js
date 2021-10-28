import React, {useEffect} from "react";
import "./Welcome.css";
import {gsap, Power3} from "gsap";

export const Welcome=()=>{
    let t1=new  gsap.timeline({delay: 0.3});
    useEffect(()=> {
        //t1.from('.mainTitle',{y:15,opacity:0,ease: Power3.easeIn,delay:0.1},'Start');
        t1.from('.welcomeImages1', {opacity: 0, x: -100, duration: 1, ease: Power3.easeIn, delay: 0.1}, 'Start');
        t1.from('.welcomeImages2', {opacity: 0, x: -100, duration: 1, ease: Power3.easeIn, delay: 0.1}, 'Start');
        t1.from('.welcomeImages3', {opacity: 0, x: -100, duration: 1, ease: Power3.easeIn, delay: 0.1}, 'Start');
        t1.from('.welcomeImages4', {opacity: 0, x: 100, duration: 1, ease: Power3.easeIn, delay: 0.1}, 'Start');
        t1.from('.welcomeImages5', {opacity: 0, x: 100, duration: 1, ease: Power3.easeIn, delay: 0.1}, 'Start');
        t1.from('.welcomeImages6', {opacity: 0, x: 100, duration: 1, ease: Power3.easeIn, delay: 0.1}, 'Start');
        gsap.from('.welcomeText', {opacity: 0, y: 100, duration: 1});
        gsap.from('.welcomeTitle', {opacity: 0, y: 100, duration: 1});
    });

    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title welcomeTitle"}>Welcome</div>
                <div>
                    <div className={"welcomeText"}>
                        The Hope-Simpson Map project (HS) started by students from the fall 2020 class on advanced computer
                        architecture.
                        <div>
                            <ul>
                                <li>Computer Science majors</li>
                                <li>Electrical and Computer Engineering majors</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"myLine"}></div>
                    <div>
                        <div style={{textAlign: "center"}}>We created a web platform based on</div>
                        <div className={"welcomeImages"}>
                            <div className={"welcomeImages1"}>
                                <img src={"/images/database.png"}/>
                                <span>Modern databases</span>
                            </div>
                            <div className={"welcomeImages2"}>
                                <img src={"/images/visualization.png"}/>
                                <span>Data visualization</span>
                            </div>
                            <div className={"welcomeImages3"}>
                                <img src={"/images/web.png"}/>
                                <span>Web design</span>
                            </div>
                            <div className={"welcomeImages4"}>
                                <img src={"/images/machine.png"}/>
                                <span>Virtual machines</span>
                            </div>
                            <div className={"welcomeImages5"}>
                                <img src={"/images/signal.png"}/>
                                <span>Signal processing</span>
                            </div>
                            <div className={"welcomeImages6"}>
                                <img src={"/images/data.png"}/>
                                <span>Data analysis</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}