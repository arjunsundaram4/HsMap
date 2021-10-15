import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "../Home/Home";
import About from "../About/About";
import MapTableau from "../MapTableau/MapTableau";
import MapGDS from "../MapGDS/MapGDS";
import Modeling from "../Modeling/Modeling";
import Team from "../Team/Team";
import { NavBar } from '../NavBar/NavBar';

const sites = [
  {
    name: "Home",
    location: "/",
  },
  {
    name: "About",
    location: "/about",
  },
  {
    name: "Tableau Map",
    location: "/map/tableau",
  },
  {
    name: "GDS Map",
    location: "/map/gds",
  },
  {
    name: "Modeling",
    location: "/modeling",
  },
  {
    name: "Team",
    location: "/team",
  },
];

function SiteRouter() {
  const path = window.location.pathname;
  const currentSiteIndex = sites.findIndex(x=>x.location===path);
  const [navIndex, setNavIndex] = useState(currentSiteIndex);
  return (
    <Router>
      <NavBar navItems={sites} onItemClick={setNavIndex} selectedIndex={navIndex}/>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/map/gds">
          <MapGDS />
        </Route>
        <Route path="/map/tableau">
          <MapTableau />
        </Route>
        <Route path="/modeling">
          <Modeling />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default SiteRouter;
