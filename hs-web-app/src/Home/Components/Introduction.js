import React from 'react';
import '../Home.css';
export const Introduction=()=>{
    let introTitle="Introduction";
    return (
        <div id={"section1"}>
            <div className={"title displayFlex"}>
                {
                    introTitle.split('').map((eachChar,index)=>{
                        return <div key={index} id={`introTitle${index}`}>{eachChar.replace(/ /g, "\u00a0")}</div>
                    })
                }
            </div>
            <div className="section1Text1">A very cordial welcome to the Hope-Simpson project started by a group of students from the fall 2020 class of COMP/ELEC 425/554! We created a platform based on modern databases, visualization, web design, virtual machines, signal processing, and data analysis. We analyzed COVID-19 data on our platform based on Robert Edgar Hope-Simpson's perspective and his study of the spread of the influenza virus.</div>
            <br/>
            <div className="section1Text2">On our home page, you can begin to explore COVID-19 cases around the world. The histogram displays confirmed cases in weekly increments based on the locations you selected.</div>
        </div>
    )
}