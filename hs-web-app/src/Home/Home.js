import React, {Component, useEffect, useState} from 'react';
import './Home.css';
import {gsap,Power3,Linear} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { ShowTitle } from './Components/ShowTitle';
import { MainTableau } from './Components/MainTableau';
import { MainInfo } from './Components/MainInfo';
import {EndSection} from './Components/EndSection'
import { Introduction } from './Components/Introduction';
import {createRandomNumber} from "../Repository/RepositoryFunction";

gsap.registerPlugin(ScrollTrigger);
// Tableau dashboard settings
const TABLEAU_WORLD_MAP_DASHBOARD_URL = 'https://public.tableau.com/views/hs-world-map-all/Dashboard-WorldMapAll';
const TABLEAU_OPTIONS = { device: ["desktop", "phone"] };

function Home() {
    


    let mainTitle="Exploring COVID-19 Cases Around the World";
    let mainSubTitle="Modern Tools Applied to a 90’s Concept";
    let introTitle="Introduction";
    useEffect(()=>{
        var titleTimeline=gsap.timeline();
        for(var i=0;i<mainTitle.length;i++){
            titleTimeline.from("#mainTitle"+i,{opacity: 0,x: 100,duration: 0.04, ease: Power3.easeIn});
        }
        var subTitleTimeLine=gsap.timeline();
        for(var i=mainSubTitle.length-1;i>=0;i--){
            subTitleTimeLine.from("#subTitle"+i,{opacity: 0,x: -100,duration: 0.04, ease: Power3.easeIn});
        }
        for(var i=0;i<introTitle.length;i++){
            subTitleTimeLine.from("#introTitle"+i,{opacity: 0,x: createRandomNumber(50,80,true),y:createRandomNumber(50,80,true),duration: 0.04, ease: Power3.easeIn});
        }
        subTitleTimeLine.from(".section1Text1",{opacity: 0,duration: 0.5, ease: Power3.easeIn});
        subTitleTimeLine.from(".section1Text2",{opacity: 0,duration: 0.5, ease: Power3.easeIn});
    })

    return (

        <div className={"homebody bodyMarginTop"}>
            <ShowTitle/>
            <Introduction/>
            <MainTableau />
            <MainInfo />
            <EndSection/>
        </div>
    )
}

export default Home;
