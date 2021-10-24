import React, {useEffect} from "react";
import {gsap} from "gsap";

export const SeasonOutBreak=()=>{
    useEffect(()=> {
        gsap.from('.seasonTitle', {
            opacity: 0, y: 100, duration: 1, scrollTrigger: {
                trigger: '.seasonTitle',
                start: "center 80%"
            }
        });
        gsap.from('.seasonText', {
            opacity: 0, x: 100, duration: 1, scrollTrigger: {
                trigger: '.seasonText',
                start: "center 80%"
            }
        });
        gsap.from('.seasonContent .latitudeImage', {
            opacity: 0, x: -100, duration: 1, scrollTrigger: {
                trigger: '.seasonContent .latitudeImage',
                start: "center 80%"
            }
        });
    });

    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title seasonTitle"}>Influenza Outbreaks Follow the Season and Latitude</div>
                <div className={"seasonContent"}>
                    <img src={"/images/latitudeCategory.png"} className={"latitudeImage"}/>
                    <div className={"seasonText"}>
                        <div>
                            The spike in influenza cases occurs in January in the north temperate zone
                        </div>
                        <div>
                            A more moderated distribution of influenza cases nearer the equator, in the north and south tropical zones
                        </div>
                        <div>
                            The spike in influenza cases, six months later, occurs in July in the south temperate zone
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}