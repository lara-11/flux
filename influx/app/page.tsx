import React from 'react';
import './style.css'; // Import your CSS file

const Page: React.FC = () => {
    return (
        <div>
            {/* InFlux NAV Bar */}
            <header>
                <nav id="navbar" data-spy="affix">
                    <ul className="nav-logo">
                        <a href="#">
                            <img src="img/InFlux-Logo-Black.png" alt="InFlux Technologies" className="logo" />
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
                        {/* Add more list items */}
                    </ul>

                    {/* Add more navigation elements */}
                </nav>
            </header>

            {/* InFlux Body */}
            <main>
                {/* Add your container elements */}
            </main>

            <footer>
                {/* Add footer content */}
            </footer>
        </div>
    );
}

export default Page;
