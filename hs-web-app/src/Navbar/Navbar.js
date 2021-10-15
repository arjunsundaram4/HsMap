import React, {useState} from "react";
import { useHistory } from "react-router";
import './Navbar.css';

export const NavBar = (props)=>{
    const {navItems, selectedIndex, onItemClick} = props;
    const [navOpen, setNavOpen] = useState(false);
    let history = useHistory();
    const closeNav = () => {
        setNavOpen(false);
    }
    const openNav = () =>{
        setNavOpen(true);
    }
    const redirectToPage = (index) =>{
        history.push(navItems[index].location);
        onItemClick(index);
    }

    return (
        <div className={"customNavBar"}>
            <div className={"links"} style={navOpen?{left:"0px"}:{left: "-100%"}}>
                <div className={"closeNav"} onClick={closeNav}>
                    <div></div>
                    <div></div>
                </div>
                <div className={"linksDiv"}>
                    {
                        navItems.map((item,index)=>{
                            return (
                                <div className={selectedIndex===index?"linkSelected":"linkUnselected"} 
                                onClick={()=>redirectToPage(index)}>
                                    <b/>
                                    <b/>
                                    <div >{item.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={"hamburger"} onClick={openNav}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
