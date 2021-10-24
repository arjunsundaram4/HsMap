import React, {useEffect} from "react";
import {gsap} from "gsap";

export const Proposal=()=>{
    useEffect(()=> {
        gsap.from('.proposalTitle', {
            opacity: 0, y: 100, duration: 1, scrollTrigger: {
                trigger: '.proposalTitle',
                start: "top 80%"
            }
        });
        gsap.from('.proposalText', {
            opacity: 0, x: 100, duration: 1, scrollTrigger: {
                trigger: '.proposalText',
                start: "top 80%"
            }
        });

        gsap.from('.proposalContent .latitudeImage', {
            opacity: 0, x: -100, duration: 1, scrollTrigger: {
                trigger: '.proposalContent .latitudeImage',
                start: "center 80%"
            }
        });
    });

    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title proposalTitle"}>Proposal of a Seasonally Mediated Stimulus</div>
                <div className={"proposalContent"}>
                    <img src={"/images/latitudeCategory.png"} className={"latitudeImage"}/>
                    <div class={"proposalText"}>
                        <ul>
                            <li>
                                From The Transmission of Epidemic Influenza
                                <ul>
                                    <li>PROPOSITION 3: CONCERNING SEASONAL REACTIVATION OF PERSISTENT INFLUENZA VIRUS</li>
                                    <ul>
                                        <li>The persistent influenza virus infecting human carriers is annually reactivated to infectiousness by a seasonally mediated stimulus. The carrier, usually without again falling ill, becomes highly infectious for a brief period and his nonimmune companions, if infected, rapidly develop an attack of influenza.” (p. 193)</li>
                                    </ul>
                                </ul>
                            </li>
                            <li>“The conclusion seems inescapable that, viewed on a global scale, epidemic influenza is moving annually south and then north through the world population, a smooth yearly scanning of the world very different from the local episodic picture of the disease.”</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}