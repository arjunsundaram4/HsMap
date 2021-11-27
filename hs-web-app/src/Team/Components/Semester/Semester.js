import React, { useEffect } from "react";
import { Profile } from './Components/Profile'
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createRandomNumber } from "../../../Repository/RepositoryFunction";
import './Semester.css'

export const Semester = (props) => {
    var uniqueId = props.id;

    useEffect(()=>{
        var list = props.profileList;
        if(!list ||  list.length === 0){
            return;
        }

        var semesterNameTimeLine= gsap.timeline({
            scrollTrigger:{
                trigger: `.semesterName${uniqueId}`,
                scrub: 1,
                start: "top 90%",
                end: "+=100% 90%"
            }
        })
        for(var i=0;i<props.semesterName.length;i++){
            semesterNameTimeLine.from(`#semesterName${uniqueId}`+i,{opacity: 0,x:createRandomNumber(50,80,true),y: createRandomNumber(50,80,true),duration: 1, ease: Power3.easeIn});
        }

        gsap.from(`.timeline${uniqueId}`,{height: 0,duration:1,ease: "linear",scrollTrigger:{
            trigger:`.profiles${uniqueId}`,
            start: "top 70%",
            end: "+=100% 100%",
            scrub: 1
        }});

        var profileTimeLine=gsap.timeline({
            scrollTrigger:{
                trigger: `.profiles${uniqueId}`,
                scrub: 1,
                start: "top 70%",
                end: "+=100% 100%"
            }
        });
        for(i=0;i<props.profileList.length;i++){
            profileTimeLine.from(`#profileDiv${uniqueId}`+i,{opacity:0,duration: 1, ease: Power3.easeIn})
        }
        
    }, [props.profileList]);

    return (
        <div className={"semester"}>
            <div className={`semesterName semesterName${uniqueId}`}>
                {
                    props.semesterName.split('').map((eachChar, index) =>
                        <div key={index} id={`semesterName${uniqueId}` + index}>{eachChar.replace(/ /g, "\u00a0")}</div>
                    )
                }
            </div>
            <div className={`profiles profiles${uniqueId}`} >
                {
                    props.profileList.map((profile, index) =>
                        <div key={index} className={"profileDiv"} id={`profileDiv${uniqueId}` + index}>
                            <Profile
                                name={profile.name ?? ''}
                                avatar={profile.avatar ?? ''}
                                title={profile.title ?? ''}
                                organization={profile.organization ?? ''}
                                roles={profile.otherInfo?.roles ?? []}
                                link={profile.link ?? ''}
                            />
                        </div>
                    )
                }
                <div className={`timeline timeline${uniqueId}`}>
                    <div className={"arrowLine"}></div>
                    <div className={"arrow"}></div>
                </div>
            </div>
        </div>
    )
}