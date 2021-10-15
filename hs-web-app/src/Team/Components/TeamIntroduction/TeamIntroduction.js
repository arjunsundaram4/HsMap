import React from "react";
import './TeamIntroduction.css';
export const TeamIntroduction = ()=>{
    const RICE_IMAGE_PATH = '/assets/rice.jpg';
    return (
        <div className={"schoolImage"}>
            <div className={"content"}>Team Introduction</div>
            <div className={"scrollForMore"}>
                <div>Scroll For More Information</div>
                <div className="arrowDown"></div>
            </div>
            <img src={ RICE_IMAGE_PATH } alt="" className="img-fluid"/>
        </div>
    );
}