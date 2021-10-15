import React from 'react';
import './showSubTitle.css';
export const showSubTitle=()=>{
    var count=0;
    let mainTitle="Exploring COVID-19 Cases Around the World";
    let mainSubTitle="Modern Tools Applied to a 90’s Concept";
    return (
        <div className="text-center subTitle displayFlex displayCenter displayWrap">
            {
                mainSubTitle.split(' ').map((eachWord,index)=>{
                    return (
                        <div className="displayFlex">
                            {
                                eachWord.split('').map((eachChar,index)=> {
                                    return <span key={count} id={`subTitle${count++}`}>{eachChar.replace(/ /g, "\u00a0")}</span>
                                })
                            }
                            &nbsp;
                        </div>
                    )
                })
            }
        </div>
    )
}