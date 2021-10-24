import React from "react";

export const Next=()=>{
    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title nextTitle"}>What we find: phase shifts and moderated responses</div>
                <div className={"nextContent"}>
                    <div className={"nextText"}>
                        <ul>
                            <li>
                                A new cohort of students is forming:
                                <ul>
                                    <li>Former team members and several new team members</li>
                                </ul>
                            </li>
                            <li>
                                Improve data visualization tools
                            </li>
                            <li>
                                VM support for automatic daily update of databases.
                            </li>
                            <li>
                                Let user compare histograms, etc.
                            </li>
                            <li>
                                Looking at higher resolution analysis both temporally (weekly) and spatially (latitude)
                            </li>
                            <li>
                                Explore network based models that incorporate travel
                            </li>
                            <li>
                                And more!
                            </li>
                        </ul>
                    </div>
                    <div className={"nextImage"}>
                        <img src={"/images/initialItaly.png"} className={"initialItalyImage"}/>
                        <img src={"/images/initialVictoria.png"} className={"initialVictoriaImage"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}