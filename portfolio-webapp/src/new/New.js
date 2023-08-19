import React, { Component } from "react";
import { Link, List, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/nav.css";

export default function New() {
        const location = useLocation();

        const getNavPositionCLass = () =>{
            switch (location.pathname) {
                case "/":
                    return "new-about";
                case "/skills":
                    return "new-skills";
                case "/projects":
                    return "new-projects";
                case "/contact":
                    return "new-contact";
                default:
                    return "";
            }
        };

        const getPageTitle = () => {
            switch (location.pathname) {
                case "/":
                    return "ABOUT";
                case "/skills":
                    return "SKILLS";
                case "/projects":
                    return "PROJECTS";
                case "/contact":
                    return "CONTACT";
                default:
                    return "";
            }
        };

        const newPositionClass = getNavPositionCLass();
        const pageTitle = getPageTitle();

    const isCurrentPage = (newClass) => {
        return newClass === newPositionClass;
    };
    
    const renderNewLink = (to, imgSrc, altTxt, newClass) => {
        const isCurrent = isCurrentPage(newClass);
        const linkClass = isCurrent ? "new-link current": "new-link"

        return (
            <Link to={to} className= {linkClass}>
                <img src={imgSrc} alt={altTxt}/> 
                {isCurrent && <h1 className = "page-title">{pageTitle}</h1>}
            </Link> 
        );
    };

    return (
        <nav className = {'nav $newPositionClass}'} >
            {renderNewLink(
                "/",astronautHelmet,
                "astronaut helmet icon",
                "new-about"
            )}
            {renderNewLink(
                "/skills",deadEye,
                "Dead Eye icon",
                "new-skills"
            )}
            {renderNewLink(
                "/projects",stack,
                " stack icon",
                "new-projects"
            )}
            {renderNewLink(
                "/contact",envelope,
                "envelope icon",
                "new-contact"
            )}
        </nav>
    );
}