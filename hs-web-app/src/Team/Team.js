import React from "react";
import './Team.css';
import {spring2021SemesterProfileList, fall2020SemesterProfileList} from "./Data/ProfileDatabase";
import {RayProfile} from "./Components/RayProfile/RayProfile"
import {TeamIntroduction} from "./Components/TeamIntroduction/TeamIntroduction"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Semester} from './Components/Semester/Semester'
gsap.registerPlugin(ScrollTrigger);

function Team() {
    const spring2021Semester="Members in 2021 Spring";
    const fall2020Semester="Members in 2020 Fall";
    
  return (
    <div>
        <TeamIntroduction/>
        <RayProfile/>
        <Semester semesterName={spring2021Semester} profileList={spring2021SemesterProfileList} id={"spring2021"}/>           
        <Semester semesterName={fall2020Semester} profileList={fall2020SemesterProfileList} id={"fall2020"}/>
    </div>
  );
}

export default Team;
