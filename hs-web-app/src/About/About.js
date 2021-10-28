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
import {Database} from "./Components/Database/Database";
import {Hypothesis} from "./Components/Hypothesis/Hypothesis";
import {Initial} from "./Components/Initial/Initial";
import {Phase} from "./Components/Phase/Phase";
import {Next} from "./Components/Next/Next";

gsap.registerPlugin(ScrollTrigger);

function About() {
  return (
    <div className="bodyMarginTop">
      <div className="text-center mainTitle">About the Hope-Simpson Concept</div>
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
    </div>
  );
}

export default About;
