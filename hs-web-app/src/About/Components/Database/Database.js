import React, {useEffect} from "react";
import "./Database.css";
import {gsap} from "gsap";

export const Database=()=>{
    useEffect(()=> {
        gsap.from('.databaseTitle', {
            opacity: 0, y: 100, duration: 1, scrollTrigger: {
                trigger: '.databaseTitle',
                start: "center 80%"
            }
        });

        gsap.from('.databaseText', {
            opacity: 0, x: 100, duration: 1, scrollTrigger: {
                trigger: '.databaseText',
                start: "center 80%"
            }
        });
    });

    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title databaseTitle"}>Our Databases</div>
                <div className={"databaseContent"}>
                    <div className={"databaseText"}>
                        <ul>
                            <li>
                                Global and the US data from JHU GitHub repo: <a target="_blank" href={"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series"}>Click Me!</a>
                                <ul>
                                    <li>The dataset is located at "COVID-19/csse_covid_19_data/csse_covid_19_time_series/”</li>
                                    <li>Global and US data are from "time_series_covid19_confirmed_global.csv" and "time_series_covid19_confirmed_US.csv", respectively</li>
                                    <li>Harris County data also comes from here.</li>
                                </ul>
                            </li>
                            <li>
                                Brazil data:<a target="_blank" href={"https://github.com/wcota/covid19br"}>Click Me!</a>
                            </li>
                            <li>
                                Argentina data:<a target="_blank" href={"https://datos.gob.ar/dataset/salud-covid-19-casos-registrados-republica-argentina"}>Click Me!</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}