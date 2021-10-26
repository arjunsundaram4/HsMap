import React, {useEffect} from "react";
import {gsap} from "gsap";
import "./Inspiration.css";

export const Inspiration=()=>{
    useEffect(()=> {
        gsap.from('.bookCoverImage', {
            opacity: 0, x: -100, duration: 1, scrollTrigger: {
                trigger: '.bookCoverImage',
                start: "top 80%"
            }
        });
        gsap.from('.inspirationText', {
            opacity: 0, x: 100, duration: 1, scrollTrigger: {
                trigger: '.inspirationText',
                start: "top 80%"
            }
        });
        gsap.from('.inspirationTitle', {
            opacity: 0, y: 100, duration: 1, scrollTrigger: {
                trigger: '.inspirationTitle',
                start: "top 80%"
            }
        });
    });

    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title inspirationTitle"}>Inspiration</div>
                <div className={"inspirationDiv"}>
                    <img src={"/images/BookCover.png"} className={"bookCoverImage"}/>
                    <div className={"inspirationText"}>
                        <ul>
                            <li>
                                Robert Edgar Hope-Simpson (1908-2003) was a general practitioner.
                                <ul>
                                    <li>
                                        He showed that shingles was caused by reactivation of the chickenpox virus.
                                    </li>
                                </ul>
                            </li>
                            <li>The influenza epidemic of 1932-33,  the year he began his practice, motivated him to study the influenza virus.</li>
                            <li>
                                60 years of extensive historical research culminated in the publication of his book The Transmission of Epidemic Influenza
                                <ul>
                                    <li>Includes Houston influenza data</li>
                                </ul>
                            </li>
                            <li>Proposed that person-to-person transmission was insufficient to explain the pattern of influenza outbreaks around the world.</li>
                            <li>Proposed an influential seasonally-mediated mechanism.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}