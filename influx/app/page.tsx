import React from 'react';
import './style.css'; // Import your CSS file
import './nav.css'; // Import your CSS file
import './script.js'; // Import your JavaScript file


 const Page: React.FC = () => {
    return (

<header>
        <nav id="navbar" data-spy="affix">
            <ul className="nav-logo">
                <a href="#">
                    <img src={InFluxLogoBlack} alt="InFlux Technologies" className="logo" />
                </a>
            </ul>

            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="#" className="nav-link">Events</a>
                    <span className="arrow">&#x2304;</span>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Partners</a>
                    <span className="arrow">&#x2304;</span>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">About Us</a>
                    <span className="arrow">&#x2304;</span>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Additional Projects</a>
                    <span className="arrow">&#x2304;</span>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Contact Us</a>
                    <span className="arrow">&#x2304;</span>
                </li>
            </ul>

            <ul className="nav-menu2">
                <li className="nav-item">
                    <a href="#" className="nav-link">List Item 1</a>
                    <span className="arrow">&#x2304;</span>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">List Item 2</a>
                    <span className="arrow">&#x2304;</span>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">List Item 3</a>
                    <span className="arrow">&#x2304;</span>
                </li>
            </ul>

            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            <div/>
        </nav>
    <header/>

    );
}

export default Page;