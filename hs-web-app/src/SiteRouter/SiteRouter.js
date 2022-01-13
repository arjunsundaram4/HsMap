import React, { useState,lazy,Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { NavBar } from '../NavBar/NavBar';
const Home = lazy(() => import("../Home/Home"));
const About = lazy(() => import("../About/About"));
const MapTableau = lazy(() => import("../MapTableau/MapTableau"));
const MapGDS = lazy(() => import("../MapGDS/MapGDS"));
const Modeling = lazy(() => import("../Modeling/Modeling"));
const Team = lazy(() => import("../Team/Team"));
const Blog = lazy(() => import("../Blogs/Blogs"));
const Faq = lazy(() => import("../FAQ/Faq"));
// const MapLeaflet=lazy(()=> import ("../MapLeaflet/MapLeaflet"))
const Propositions = lazy(() => import("../Propositions/Propositions"));
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
    name: "Propositions",
    location: "/propositions",
  },
  {
    name: "Blogs",
    location: "/blogs",
  },
  {
    name: "FAQs",
    location: "/faq",
  },
  {
    name: "Tableau Map",
    location: "/map/tableau",
  },
  {
    name: "GDS Map",
    location: "/map/gds",
  },
  // {
  //   name:"Leaflet Map",
  //   location:"/map/leaflet"
  // },
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
      <Suspense fallback={<div>Loading...</div>}>  
      <NavBar navItems={sites} onItemClick={setNavIndex} selectedIndex={navIndex}/>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/propositions">
          <Propositions />
        </Route>
        <Route exact path="/blogs">
          <Blog />
        </Route>
        <Route exact path="/map/gds">
          <MapGDS />
        </Route>
        {/* <Route path="/map/leaflet">
          <MapLeaflet />
        </Route> */}
        <Route path="/map/tableau">
          <MapTableau />
        </Route>
        <Route path="/modeling">
          <Modeling />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Suspense>
    </Router>
  );
}

export default SiteRouter;
