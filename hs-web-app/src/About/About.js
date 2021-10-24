import React, {useEffect} from "react";
import './About.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {gsap,Power3} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import {Welcome} from "./Components/Welcome/Welcome";
import {Inspiration} from "./Components/Inspiration/Inspiration";
import {Distribution} from "./Components/Distribution/Distribution";
import {Proposal} from "./Components/Proposal/Proposal";
import {SeasonOutBreak} from "./Components/SeasonOutBreak/SeasonOutBreak";
import {Work} from "./Components/Work/Work";
import {Region} from "./Components/Region/Region";
import {Database} from "../Home/Components/Database/Database";
import {Hypothesis} from "./Components/Hypothesis/Hypothesis";
import {Initial} from "./Components/Initial/Initial";
import {Phase} from "./Components/Phase/Phase";
import {Next} from "./Components/Next/Next";

gsap.registerPlugin(ScrollTrigger);
const slideImages = [
  './images/p0.jpg',
  './images/p1.jpg',
  './images/p2.jpg',
  './images/p3.jpg',
  './images/p4.jpg',
  './images/p5.jpg',
  './images/p6.jpg',
  './images/p7.jpg',
  './images/p8.jpg',
  './images/p9.jpg',
  './images/p10.jpg',
  './images/p11.jpg'
];

const properties = {
  transitionDuration: 600,
  infinite: true,
  indicators: true,
  arrows: true
};

const Slideshow = () => {
  return (
    <div className={"slides"}>
        <Welcome/>
        <Inspiration/>
        <Distribution/>
        <Proposal/>
        <SeasonOutBreak/>
        <Work/>
        <Region/>
        <Database/>
        <Hypothesis/>
        <Initial/>
        <Phase/>
        <Next/>
    </div>
  )
};

function About() {
  let t1=new  gsap.timeline({delay: 0.3});
  useEffect(()=>{
    //t1.from('.mainTitle',{y:15,opacity:0,ease: Power3.easeIn,delay:0.1},'Start');
      t1.from('.welcomeImages1',{opacity:0,x:-100,duration:1,ease: Power3.easeIn,delay:0.1},'Start');
      t1.from('.welcomeImages2',{opacity:0,x:-100,duration:1,ease: Power3.easeIn,delay:0.1},'Start');
      t1.from('.welcomeImages3',{opacity:0,x:-100,duration:1,ease: Power3.easeIn,delay:0.1},'Start');
      t1.from('.welcomeImages4',{opacity:0,x:100,duration:1,ease: Power3.easeIn,delay:0.1},'Start');
      t1.from('.welcomeImages5',{opacity:0,x:100,duration:1,ease: Power3.easeIn,delay:0.1},'Start');
      t1.from('.welcomeImages6',{opacity:0,x:100,duration:1,ease: Power3.easeIn,delay:0.1},'Start');
    gsap.from('.welcomeText',{opacity:0,y:100,duration:1});
    gsap.from('.welcomeTitle',{opacity:0,y:100,duration:1});



    gsap.from('.bookCoverImage',{opacity:0,x:-100,duration:1,scrollTrigger:{
        trigger:'.bookCoverImage',
        start: "top 80%"
      }});
    gsap.from('.inspirationText',{opacity:0,x:100,duration:1,scrollTrigger:{
        trigger:'.inspirationText',
        start: "top 80%"
      }});
    gsap.from('.inspirationTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
        trigger:'.inspirationTitle',
        start: "top 80%"
      }});
    gsap.from('.distributeTitle',{opacity:0,y:-100,duration:1,scrollTrigger:{
        trigger:'.distributeTitle',
        start: "top 80%"
      }});
    gsap.from('.distributeInnerText',{opacity:0,x:-100,duration:1,scrollTrigger:{
        trigger:'.distributeInnerText',
        start: "top 80%"
      }});
    gsap.from('.tiltEarthImage',{opacity:0,y:100,duration:1,scrollTrigger:{
        trigger:'.tiltEarthImage',
        start: "top 80%"
      }});
      gsap.from('.distributeContent .latitudeImage',{opacity:0,x:400,duration:1,rotation: 180,scrollTrigger:{
              trigger:'.distributeContent .latitudeImage',
              start: "top 80%"
          }});
    gsap.from('.proposalTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
        trigger:'.proposalTitle',
        start: "top 80%"
      }});
    gsap.from('.proposalText',{opacity:0,x:100,duration:1,scrollTrigger:{
        trigger:'.proposalText',
        start: "top 80%"
      }});

    gsap.from('.proposalContent .latitudeImage',{opacity:0,x:-100,duration:1,scrollTrigger:{
        trigger:'.proposalContent .latitudeImage',
        start: "center 80%"
      }});

    gsap.from('.seasonTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
        trigger:'.seasonTitle',
        start: "center 80%"
      }});
    gsap.from('.seasonText',{opacity:0,x:100,duration:1,scrollTrigger:{
        trigger:'.seasonText',
        start: "center 80%"
      }});
    gsap.from('.seasonContent .latitudeImage',{opacity:0,x:-100,duration:1,scrollTrigger:{
        trigger:'.seasonContent .latitudeImage',
        start: "center 80%"
      }});

      gsap.from('.workTitle',{opacity:0,y:-100,duration:1,scrollTrigger:{
              trigger:'.workTitle',
              start: "center 80%"
          }});
      gsap.from('.workText',{opacity:0,x:-100,duration:1,scrollTrigger:{
              trigger:'.workText',
              start: "center 80%"
          }});
      gsap.from('.workGithubImage',{opacity:0,x:100,duration:1,scrollTrigger:{
              trigger:'.workGithubImage',
              start: "center 80%"
          }});
      gsap.from('.workImages',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.workImages',
              start: "center 90%"
          }});

      gsap.from('.regionTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.regionTitle',
              start: "center 80%"
          }});

      gsap.from('.regionImage',{opacity:0,x:100,y:-100,duration:1,scrollTrigger:{
              trigger:'.regionImage',
              start: "center 80%"
          }});

      gsap.from('.regionText',{opacity:0,x:-100,y:100,duration:1,scrollTrigger:{
              trigger:'.regionText',
              start: "center 90%"
          }});

      gsap.from('.databaseTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.databaseTitle',
              start: "center 80%"
          }});

      gsap.from('.databaseText',{opacity:0,x:100,duration:1,scrollTrigger:{
              trigger:'.databaseText',
              start: "center 80%"
          }});


      //t1.staggerFrom('.databaseText',1,{y:30,ease: Power3.easeOut,opacity:0},0.35);
      gsap.from('.hypothesisTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.hypothesisTitle',
              start: "center 80%"
          }});
      gsap.from('.hypothesisText',{opacity:0,x:100,duration:1,scrollTrigger:{
              trigger:'.hypothesisText',
              start: "center 80%"
          }});
      gsap.from('.hypothesisImage',{opacity:0,x:-100,duration:1,scrollTrigger:{
              trigger:'.hypothesisImage',
              start: "center 80%"
          }});
      gsap.from('.initialTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.initialTitle',
              start: "center 80%"
          }});
      gsap.from('.initialImages .initialItalyImage',{opacity:0,x:100,duration:1,scrollTrigger:{
              trigger:'.initialImages .initialItalyImage',
              start: "center 80%"
          }});
      gsap.from('.initialImages .initialVictoriaImage',{opacity:0,x:-100,duration:1,scrollTrigger:{
              trigger:'.initialImages .initialVictoriaImage',
              start: "center 80%"
          }});
      gsap.from('.initialText',{opacity:0,x:100,y:100,duration:1,scrollTrigger:{
              trigger:'.initialText',
              start: "center 80%"
          }});

      gsap.from('.phaseTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.phaseTitle',
              start: "center 80%"
          }});
      gsap.from('.phaseText',{opacity:0,x:100,y: 100,duration:1,scrollTrigger:{
              trigger:'.phaseText',
              start: "center 80%"
          }});
      gsap.from('.phaseCompareImageDiv',{opacity:0,x:-100,duration:1,scrollTrigger:{
              trigger:'.phaseCompareImageDiv',
              start: "center 80%"
          }});
      gsap.from('.phaseFloridaImage',{opacity:0,y:-100,duration:1,scrollTrigger:{
              trigger:'.phaseFloridaImage',
              start: "center 80%"
          }});
      gsap.from('.phaseEgyptImage',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.phaseEgyptImage',
              start: "center 80%"
          }});
      gsap.from('nextTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'nextTitle',
              start: "center 90%"
          }});
      gsap.from('.nextImage .initialItalyImage',{opacity:0,x:-100,duration:1,scrollTrigger:{
              trigger:'.nextImage .initialItalyImage',
              start: "center 90%"
          }});
      gsap.from('.nextText',{opacity:0,x:100,duration:1,scrollTrigger:{
              trigger:'.nextText',
              start: "center 90%"
          }});
      gsap.from('.nextImage .initialVictoriaImage',{opacity:0,y:-100,duration:1,scrollTrigger:{
              trigger:'.nextImage .initialVictoriaImage',
              start: "center 90%"
          }});
  })
  return (
    <div className="bodyMarginTop">
      <div className="text-center mainTitle">About the Hope-Simpson Concept</div>
      { Slideshow() }
    </div>
  );
}

export default About;
