import React, { useEffect }  from "react";
import {gsap,Power3} from "gsap";
import {createRandomNumber} from "../../../Repository/RepositoryFunction";
import './RayProfile.css'

export const RayProfile = (props)=>{
    const ProfRayInfo = props.data;

    useEffect(()=>{
        if(!ProfRayInfo){
            return;
        }

        var rayTimeLine = gsap.timeline({
            scrollTrigger:{
                trigger: ".rayDiv",
                scrub: 1,
                start: "top 60%",
                end: "+=80% 90%"
            }
        })
        rayTimeLine.from(".rayImageDiv",{scale:0,duration: 1, ease: Power3.easeIn});
        for(var i=0;i<ProfRayInfo.name.length;i++){
            rayTimeLine.from("#rayName"+i,{opacity: 0,x: 100,duration: 1, ease: Power3.easeIn});
        }
        for(i=0;i<ProfRayInfo.title.length;i++){
            rayTimeLine.from("#rayTitle"+i,{opacity: 0,x: 100,duration: 1, ease: Power3.easeIn});
        }
        for(i=0;i<ProfRayInfo.organization.length;i++){
            rayTimeLine.from("#rayOrg"+i,{opacity: 0,y: 100,duration: 1, ease: Power3.easeIn});
        }
        for(i=0;i<ProfRayInfo.otherInfo.roles.length;i++){
            rayTimeLine.from("#rayRole"+i,{scale:0,duration: 1, ease: Power3.easeIn});
        }

        var rayDivNameTimeLine= gsap.timeline({
            scrollTrigger:{
                trigger: ".rayPosition",
                scrub: 1,
                start: "top 70%",
                end: "+=80% 70%"
            }
        })
        for(i=0;i<ProfRayInfo.position.length;i++){
            rayDivNameTimeLine.from("#rayPosition"+i,{opacity: 0,x:createRandomNumber(50,80,true),y: createRandomNumber(50,80,true),duration: 1, ease: Power3.easeIn});
        }
    }, [ProfRayInfo]);

    if(!ProfRayInfo){
        return <div></div>
    }
    return (
        <div className={"rayDiv"}>
            <div className={"rayPosition"}>
                {
                    ProfRayInfo.position.split('').map((eachChar,index)=>
                        <div key={index} id={"rayPosition"+index}>{eachChar.replace(/ /g, "\u00a0")}</div>
                    )
                }
            </div>
            <div>
                <div className={"rayImageDiv"}>
                    <a href={ProfRayInfo.link} target={"_blank"}>
                        <img src={ProfRayInfo.avatar.url}/>
                    </a>
                </div>
                <div className={"rayInfo"}>
                    <div className={"rayName"}>
                        {
                            ProfRayInfo.name.split('').map((eachChar,index)=>
                                <div key={index} id={"rayName"+index}>{eachChar.replace(/ /g, "\u00a0")}</div>
                            )
                        }
                    </div>
                    <div className={"rayTitle"}>
                        {
                            ProfRayInfo.title.split('').map((eachChar,index)=>
                                <div key={index} id={"rayTitle"+index}>{eachChar.replace(/ /g, "\u00a0")}</div>
                            )
                        }
                    </div>
                    <div className={"rayOrg"}>
                        {
                            ProfRayInfo.organization.split('').map((eachChar,index)=>
                                <div key={index} id={"rayOrg"+index}>{eachChar.replace(/ /g, "\u00a0")}</div>
                            )
                        }
                    </div>
                    <div className={"rayRoles"}>
                        {
                            ProfRayInfo.otherInfo.roles.map((role,index)=>
                                <div id={"rayRole"+index} key={index}>{role}</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}