import React, {useEffect} from "react";
import {gsap} from "gsap";

export const Initial=()=>{
    useEffect(()=> {
        gsap.from('.initialTitle', {
            opacity: 0, y: 100, duration: 1, scrollTrigger: {
                trigger: '.initialTitle',
                start: "center 80%"
            }
        });
        gsap.from('.initialImages .initialItalyImage', {
            opacity: 0, x: 100, duration: 1, scrollTrigger: {
                trigger: '.initialImages .initialItalyImage',
                start: "center 80%"
            }
        });
        gsap.from('.initialImages .initialVictoriaImage', {
            opacity: 0, x: -100, duration: 1, scrollTrigger: {
                trigger: '.initialImages .initialVictoriaImage',
                start: "center 80%"
            }
        });
        gsap.from('.initialText', {
            opacity: 0, x: 100, y: 100, duration: 1, scrollTrigger: {
                trigger: '.initialText',
                start: "center 80%"
            }
        });
    });

    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title initialTitle"}>What we find: initial conditions</div>
                <div className={"initialContent"}>
                    <div className={"initialImages"}>
                        <div>
                            <img src={"/images/initialItaly.png"} className={"initialItalyImage"}/>
                        </div>
                        <div>
                            <img src={"/images/initialVictoria.png"} className={"initialVictoriaImage"}/>
                        </div>
                    </div>
                    <div className={"initialText"}>
                        <ul>
                            <li>
                                COVID-19 is referred to as novel as it is new and thus we have little resistance to it, currently.
                            </li>
                            <li>
                                The first significant cases were seen in Italy (N Temperate) in February, after the December solstice.
                                <ul>
                                    <li>They had the drop off in the summer</li>
                                    <li>They are now into the winter</li>
                                </ul>
                            </li>
                            <li>
                                Victoria Australia (S Temperate)
                                <ul>
                                    <li>Had a small exposure during their summer.</li>
                                    <li>They have gone through a complete winter and saw the spike Hope-Simpson might expect to see.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}