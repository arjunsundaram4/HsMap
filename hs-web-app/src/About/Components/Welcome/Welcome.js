import React from "react";
import "./Welcome.css";

export const Welcome=()=>{
    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title welcomeTitle"}>Welcome</div>
                <div>
                    <div className={"welcomeText"}>
                        The Hope-Simpson Map project (HS) started by students from the fall 2020 class on advanced computer
                        architecture.
                        <div>
                            <ul>
                                <li>Computer Science majors</li>
                                <li>Electrical and Computer Engineering majors</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"myLine"}></div>
                    <div>
                        <div style={{textAlign: "center"}}>We created a web platform based on</div>
                        <div className={"welcomeImages"}>
                            <div className={"welcomeImages1"}>
                                <img src={"/images/database.png"}/>
                                <span>Modern databases</span>
                            </div>
                            <div className={"welcomeImages2"}>
                                <img src={"/images/visualization.png"}/>
                                <span>Data visualization</span>
                            </div>
                            <div className={"welcomeImages3"}>
                                <img src={"/images/web.png"}/>
                                <span>Web design</span>
                            </div>
                            <div className={"welcomeImages4"}>
                                <img src={"/images/machine.png"}/>
                                <span>Virtual machines</span>
                            </div>
                            <div className={"welcomeImages5"}>
                                <img src={"/images/signal.png"}/>
                                <span>Signal processing</span>
                            </div>
                            <div className={"welcomeImages6"}>
                                <img src={"/images/data.png"}/>
                                <span>Data analysis</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}