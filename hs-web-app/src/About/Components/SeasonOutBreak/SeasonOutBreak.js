import React from "react";

export const SeasonOutBreak=()=>{
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