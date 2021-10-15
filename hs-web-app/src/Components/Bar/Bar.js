import React from 'react';
import './Bar.css'
export const Bar = (props) =>{
    return (
        <div className={"bar"} style={props.style ?? {}}></div>
    ) 
}