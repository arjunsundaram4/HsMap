import React from "react";
import "./Phase.css";

export const Phase=()=>{
    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title phaseTitle"}>What we find: phase shifts and moderated responses</div>
                <div className={"phaseContent"}>
                    <div>
                        <div className={"phaseText"}>
                            <ul>
                                <li>
                                    We can overlay regions of the world to see different patterns.
                                </li>
                                <li>
                                    Overlay N temperate (Italy) and S temperate  (Victoria, Australia)
                                    <ul>
                                        <li>The winter spike in  Victoria overlaps the summer quiet of Italy</li>
                                    </ul>
                                </li>
                                <li>
                                    Compare tropical regions that show an initial outbreak followed by a more moderated response
                                    <ul>
                                        <li>Florida, USA</li>
                                        <li>Egypt</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={"phaseCompareImageDiv"}>
                            <img src={"/images/phaseCompare.png"} className={"phaseCompareImage"}/>
                        </div>
                    </div>
                    <div className={"phaseImage"}>
                        <div>
                            <img src={"/images/phaseFlorida.png"} className={"phaseFloridaImage"}/>
                        </div>
                        <div>
                            <img src={"/images/phaseEgypt.png"} className={"phaseEgyptImage"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}