import React from 'react';
import './Tabs.css'
export const Tabs = (props) =>{

    const {selectedIndex, onSelectedItem , items} = props;
    return (
        <div className={"tabs"}>
            {
                items.map((item, index)=>{
                    return (
                        <div className={selectedIndex===index ? "tabSelected" : "tabUnselected"} onClick={()=>onSelectedItem(index)}>{item.name}</div>
                    )
                })
            }
        </div>
    );
}