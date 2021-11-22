import React from "react";
import './Profile.css';

export const Profile = ({ name, avatar, title, organization, roles, link })=>{
    const getNameField = ()=>{
        if(link && link != ''){
            return (
                <a href={link} target={"_blank"}>
                    <div className={"profileBackName"}>{name}</div>
                </a>
            )
        }
        else{
            return <div className={"profileBackName"}>{name}</div>
        }
    }
    return (
        <div className={"eachProfile"}>
            <div class={"profileInner"}>
                <div className={"profileFront"}>
                    <div className={"profileAvatar"}>
                        <img src={avatar.url}/>
                    </div>
                    <div className={"profileFrontName"}>{name}</div>
                </div>
                <div className={"profileBack"}>
                    {getNameField()}
                    <div className={"profileInfo"}>
                        <div>{title}</div>
                        <div>{organization}</div>
                    </div>
                    <div className={"profileRoles"}>
                        {
                            roles.map((role,index)=>
                                <div key={index}>{role}</div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}