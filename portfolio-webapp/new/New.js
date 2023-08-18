import React, { Component } from "react";
import { List, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/nav.css";

export default New() {
        const location = useLocation();

        const getNavPositionCLass = () =>
    render() {
        return (<div>
             <img src = { astronautHelmet } alt = "Astronaut Helmet" />
             <img src = { deadEye } alt = "Dead Eye" />
             <img src = { stack } alt = "Stack" />
             <img src = { envelope } alt = "Envelope" />
             </div>
        );
    }
}