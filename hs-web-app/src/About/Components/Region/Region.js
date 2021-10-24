import React from "react";
import "./Region.css";

export const Region=()=>{
    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title regionTitle"}>Regional Samples</div>
                <div className={"regionContent"}>
                    <div className={"regionImage"}>
                        <img src={"/images/worldMap.png"}/>
                    </div>
                    <div className={"regionText"}>
                        <ul>
                            <li>We chose a number of sample regions from each of the four zones.</li>
                            <li>
                                Our criteria was
                                <ul>
                                    <li>Geographically smaller regions i.e. US states rather than entire United States.</li>
                                    <li>Regions that tend to be localized to a smaller range of latitudes i.e. Wisconsin rather than California</li>
                                    <li>Regions that have a stable and accessible record of testing.</li>
                                    <li>Avoid oversampling a zone i.e. don’t just look at Europe and US.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}