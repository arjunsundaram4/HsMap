import React, {Component, useEffect, useState} from 'react';
import {showSubTitle} from "./showSubTitle";
import '../Home.css';
export const ShowTitle=()=>{
    var count=0;
    let mainTitle="Exploring COVID-19 Cases Around the World";
     let mainSubTitle="Modern Tools Applied to a 90’s Concept";
    return (
        <div className={"homeTitles"}>
            <div className="text-center mainTitle displayFlex displayCenter displayWrap">
                {
                    mainTitle.split(' ').map((eachWord,index)=>{
                        return (
                            <div className="displayFlex">
                                {
                                    eachWord.split('').map((eachChar,index)=> {
                                        return <div key={count} id={`mainTitle${count++}`}>{eachChar.replace(/ /g, "\u00a0")}</div>
                                    })
                                }
                                &nbsp;
                            </div>
                        )

                    })
                }
            </div>
            {showSubTitle()}
        </div>
    )
}