import React from "react";
import './About.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {gsap} from "gsap";
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
  return (
    <div className="bodyMarginTop">
      <div className="text-center mainTitle">About the Hope-Simpson Concept</div>
      { Slideshow() }
    </div>
  );
}

export default About;
