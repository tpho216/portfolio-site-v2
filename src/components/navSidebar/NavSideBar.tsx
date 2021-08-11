import React from "react"

export interface NavSideBarProps {

};

export const NavSideBar : React.FC<NavSideBarProps> =  () => {


    return (
        <div>
            <div className="container">
                <nav>
                    <div className="nav-brand">
                        <a href="index.html">
                            <img src="images/logo.png" alt="Peter Ho"/>
                        </a>
                    </div>
                    <div className="burger-menu-icon">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#landing-page">
                                <img
                                    src="images/profile-pic.jpg"
                                    alt="Peter Ho"
                                    className="profile-pic nav-link"
                                />
                                <span className="caption nav-link">Peter Ho</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" target="_blank" className="nav-link">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="#" target="_blank" className="nav-link">
                                <i className="fab fa-dev"></i>
                            </a>
                            <a href="#" target="_blank" className="nav-link">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <div className="cta">
                            <a href="#" target="_blank" className="btn nav-link">Buy Me Coffee</a>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>

       );
}