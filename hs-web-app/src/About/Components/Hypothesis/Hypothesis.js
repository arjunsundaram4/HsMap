import React, {useEffect} from "react";
import "./Hypothesis.css";
import {gsap} from "gsap";

export const Hypothesis=()=>{
    useEffect(()=> {
        gsap.from('.hypothesisTitle', {
            opacity: 0, y: 100, duration: 1, scrollTrigger: {
                trigger: '.hypothesisTitle',
                start: "center 80%"
            }
        });
        gsap.from('.hypothesisText', {
            opacity: 0, x: 100, duration: 1, scrollTrigger: {
                trigger: '.hypothesisText',
                start: "center 80%"
            }
        });
        gsap.from('.hypothesisImage', {
            opacity: 0, x: -100, duration: 1, scrollTrigger: {
                trigger: '.hypothesisImage',
                start: "center 80%"
            }
        });
    });

    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title hypothesisTitle"}>Hope-Simpson hypothesis of dynamics of virus spread</div>
                <div className={"hypothesisContent"}>
                    <div className={"hypothesisText"}>
                        <span>Chart is a histogram of weekly confirmed COVID-19 cases (N = 935k) in Italy (Latitude 41.87)</span>
                    </div>
                    <img src={"/images/hypothesis.png"} className={"hypothesisImage"}/>
                </div>
            </div>
        </div>
    )
}