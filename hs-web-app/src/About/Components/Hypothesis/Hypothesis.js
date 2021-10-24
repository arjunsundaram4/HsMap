import React from "react";
import "./Hypothesis.css";

export const Hypothesis=()=>{
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