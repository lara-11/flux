{/* import React from 'react'; */}
{/* Ensures code accessing :document" or other API's only run on "Client Side" */}
import React, { useEffect } from 'react';
import './nav.css'; // Import your CSS file
import './style.css'; // Import your CSS file
import './footer.css'; // Import your CSS file
import './script.js'; // Import your JavaScript file
import Image from 'next/image';


 const Page: React.FC = () => {
    useEffect(() => {
        // Check if document is defined to ensure this code runs only on the client side
        if (typeof document !== 'undefined') {
          // Your client-side code here, if any
        }
      }, []);
    return (

<div>
    <header>
        <nav id="navbar" data-spy="affix">
            <ul className="nav-logo">
                <a href="#">
                    <Image src="img/InFlux-Logo-Black.png" alt="InFlux Technologies" className="logo" />
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
                <li className="search nav-item">
                    <i className="icon fas fa-search nav-link"></i>
                    <i className="input"></i>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">List Item 1</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">List Item 2</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">List Item 3</a>
                </li>
            </ul>

            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    </header>

    {/* InFlux Body */}
    <main>
        <div className="container-1 snap-section">
            <div className="content-container-1">
                <div className="background-element-1">
                    <figure className="sec1-left">
                        <Image src="img/Daniel-headshot.jpg" alt="Daniel Keller (CEO)" className="headshot" />
                    </figure>
                </div>

                <div className="sec1-right slide-container">
                    <div className="slide active">
                        <div className="sec1-header-flex">
                            <h1 className="sec1-h1">Daniel Keller (CEO)</h1>
                            <h1 className="sec1-h1-2">-Get To Know InFlux</h1>
                        </div>
                        <p className="sec1-p">Formerly known as Zel Technologies, InFlux was established in 2018 with a vision to bridge the gap between traditional web (Web2) and the decentralized future (Web3). At InFlux, we are at the forefront of innovation, driving the cutting-edge blockchain technology that powers the world’s first decentralized cloud infrastructure. Our mission is to address and solve real-world problems brought on by the rapidly increasing demand for compute resources, particularly driven by the evolving AI and ML markets.</p>
                    </div>

                    <div className="slide">
                        <div className="sec1-header-flex">
                            <h1 className="sec1-h1">Section 2</h1>
                            <h1 className="sec1-h1-2">-Get To Know InFlux</h1>
                        </div>
                        <p className="sec1-p">Formerly known as Zel Technologies, InFlux was established in 2018 with a vision to bridge the gap between traditional web (Web2) and the decentralized future (Web3). At InFlux, we are at the forefront of innovation, driving the cutting-edge blockchain technology that powers the world’s first decentralized cloud infrastructure. Our mission is to address and solve real-world problems brought on by the rapidly increasing demand for compute resources, particularly driven by the evolving AI and ML markets.</p>
                    </div>

                    <div className="slide">
                        <div className="sec1-header-flex">
                            <h1 className="sec1-h1">Section3</h1>
                            <h1 className="sec1-h1-2">-Get To Know InFlux</h1>
                        </div>
                        <p className="sec1-p">Formerly known as Zel Technologies, InFlux was established in 2018 with a vision to bridge the gap between traditional web (Web2) and the decentralized future (Web3). At InFlux, we are at the forefront of innovation, driving the cutting-edge blockchain technology that powers the world’s first decentralized cloud infrastructure. Our mission is to address and solve real-world problems brought on by the rapidly increasing demand for compute resources, particularly driven by the evolving AI and ML markets.</p>
                    </div>
                </div>
            </div>

            <div className="home-submenu slider-nav">
                <a href="#" className="header-1 slider-link active" data-slide="0">Get to know InFlux</a>
                <div className="seps"></div>
                <a href="#" className="header-2 slider-link" data-slide="1">How AI is changing the landscape</a>
                <div className="seps"></div>
                <a href="#" className="header-3 slider-link" data-slide="2">Projecting the future</a>
            </div>
        </div>

        {/* The Future of AI */}
        <div className="container-2 snap-section">
            <div className="content-container-2">
                <div className="background-element-2">
                    <figure className="sec2-left">
                        <Image src="img/AI.jpg" alt="FluxEdge & AI" className="headshot-2" />
                    </figure>
                </div>

                <div className="sec2-right">
                    <h1 className="sec2-h1">The compute marketplace of the future</h1>
                    <h1 className="sec2-h1-2">How FluxEdge Shapes The Future Of AI</h1>
                    <p className="sec2-p">FluxEdge is a cutting-edge decentralized marketplace for compute services like AI, ML, and rendering. It offers a catalog of industry-standard services on an accessible, affordable platform. Designed for ease of use, FluxEdge supports tools like Jupyter Notebook and Grafana, with flexible payments in fiat and crypto and robust security. Leveraging idle hardware, FluxEdge creates value for everyone, emphasizing true decentralization. Its scalable network supports most hardware and operating systems, ensuring a seamless Web2 to Web3 transition. FluxEdge stands out in the GPU marketplace by making computing accessible, affordable, and efficient for all.</p>
                    <button className="more-btn-left">
                        <a href="#" className="btn-text">Learn More</a>
                    </button>
                </div>
            </div>
        </div>

        {/* Marketplace Network / Internet */}
        <div className="container-3 snap-section">
            <div className="content-container-3">
                <div className="background-element-3">
                    <figure className="sec3-left">
                        <Image src="img/marketplace-network.jpg" alt="FluxEdge & AI" className="headshot-3" />
                    </figure>
                </div>

                <div className="sec3-right">
                    <h1 className="sec3-h1">Empower Connectivity with Flux Marketplace</h1>
                    <h1 className="sec3-h1-2">Flux Marketplace using our network to power the internet</h1>
                    <p className="sec3-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                    <button className="more-btn-right">
                        <a href="#" className="btn-text">Learn More</a>
                    </button>
                </div>
            </div>
        </div>

        {/* What Problems Can We Solve? */}
        <div className="container-4 snap-section">
            <div className="content-container-4">
                <div className="background-element-4">
                    <figure className="sec4-left">
                        <Image src="img/world-map.jpg" alt="FluxEdge & AI" className="headshot-2" />
                    </figure>
                </div>

                <div className="sec4-right">
                    <h1 className="sec4-h1">What <span className="highlight">Problems</span> Can We Solve?</h1>

                    <div className="sec4-right-bottom">
                        <div className="sec4-problems">
                            <div className="sec4-bottom1">
                                <h1 className="sec4-h1-sub">AI Compute Challenges</h1>
                                <p className="sec4-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                <a className="more-lnk">Learn More</a>
                            </div>

                            <div className="sec4-bottom2">
                                <h1 className="sec4-h1-sub">Application Outages</h1>
                                <p className="sec4-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                <a className="more-lnk">Learn More</a>
                            </div>

                            <div className="sec4-bottom3">
                                <h1 className="sec4-h1-sub">Decentralized WordPress</h1>
                                <p className="sec4-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                <a className="more-lnk">Learn More</a>
                            </div>
                        </div>

                        <div className="sec4-problems">
                            <div className="sec4-bottom4">
                                <h1 className="sec4-h1-sub">Centralized Data Storage</h1>
                                <p className="sec4-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                <a className="more-lnk">Learn More</a>
                            </div>

                            <div className="sec4-bottom5">
                                <h1 className="sec4-h1-sub">Web3 Gaming</h1>
                                <p className="sec4-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                <a className="more-lnk">Learn More</a>
                            </div>

                            <div className="sec4-bottom6">
                                <h1 className="sec4-h1-sub">High Cost for Apps</h1>
                                <p className="sec4-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                <a className="more-lnk">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer className="snap-section-footer">
        <a href="#" className="footer-bottom">
            <p>Powered by</p>
            <Image src="img/InFlux-Logo-Black.png" alt="InFlux Technologies" className="bottom-footer-logo" />
        </a>
    </footer>
</div>

    );
};

export default Page;