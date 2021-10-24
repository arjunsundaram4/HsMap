import React from "react";
import "./Work.css";

export const Work=()=>{
    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title workTitle"}>Our work: A Hope-Simpson inspired look at COVID-19 cases </div>
                <div className={"workContent"}>
                    <div className={"workText"}>
                        <div>
                            <ul>
                                <li>
                                    Inspiration from Hope-Simpson
                                    <ul>
                                        <li>
                                            Global perspective
                                            <ul>
                                                <li>Pull from databases with global case information, including COVID-19 Data Repository by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University and others.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Zones of latitude
                                            <ul>
                                                <li>Geographic samples organized according to the same four zones of latitude used by Hope-Simpson.</li>
                                                <li>Adjust geographic sampling to pick smaller regions in each zone of latitude.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            View distribution of cases over time
                                            <ul>
                                                <li>Display histogram of cases on a weekly basis</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Tools that Hope-Simpson didn’t have
                                    <ul>
                                        <li>Tableau</li>
                                        <li>Google Data Studio</li>
                                        <li>Python and Matlab</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src={"/images/workGithub.png"} className={"workGithubImage"}/>
                </div>
                <hr/>
                <div className={"workImages"}>
                    <img src={"/images/tableauLogo.png"} className={"tableauLogoImage"}/>
                    <img src={"/images/googleDataStudioLogo.png"} className={"googleDataStudioLogoImage"}/>
                    <img src={"/images/mathWorksLogo.png"} className={"mathWorksLogoImage"}/>
                </div>
            </div>
        </div>
    )
}