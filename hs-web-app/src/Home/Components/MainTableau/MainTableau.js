import React, {useEffect,useState} from 'react';
import './MainTableau.css';
import {gsap} from "gsap";
export const MainTableau=()=>{
    const [allValues,setAllValues]=useState({
        smallScreen: false,
        iframeURL:"https://datastudio.google.com/embed/reporting/b5f88341-c05e-4114-a695-1923b4cd7bd2/page/TxgjB"
    });
    function resize(){
        console.log(window.innerWidth);
        if(window.innerWidth>1000&&allValues.smallScreen==true){
            setAllValues({smallScreen: false,iframeURL:"https://datastudio.google.com/embed/reporting/b5f88341-c05e-4114-a695-1923b4cd7bd2/page/TxgjB"});
        }
        else if(window.innerWidth<=1000&&allValues.smallScreen==false){
            setAllValues({smallScreen: true,iframeURL:"https://datastudio.google.com/embed/u/0/reporting/5aa0f5f5-2bf9-4654-8b36-7b6df6dc3d31/page/TxgjB"});

        }
    }
    window.addEventListener("resize", resize);
    resize();
    useEffect(()=>{
        gsap.from('.homeTableau',{opacity: 0,x: 200,duration:1,ease: "linear",scrollTrigger:{
                trigger:'.homeTableau',
                start: "top 50%",
                end: "center 70%"
            }});
    })
    return (
        <div className={"homeTableau"}>
            <div style={{paddingBottom:allValues.smallScreen?"75%":"45%"}}>
                <iframe scrolling="no" frameBorder="0" src={allValues.iframeURL}></iframe>
            </div>
        </div>
    )
}