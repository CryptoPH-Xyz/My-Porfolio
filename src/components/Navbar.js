import React, { useState } from 'react';
import Profile from '../pictures/Sidebar-Xyz.png';
import Avatar from '../pictures/Avatar-Xyz.png';
import Resume from '../pdf/Resume.pdf';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const handleMenu = () => {
        setShowMenu(oldValue => !oldValue)
    }

    const handleSidebar = () => {
        setShowSidebar(oldValue => !oldValue)
    }

    return (
        <div className="navbar" id="navbar">
            {showSidebar ?
                <div className="sidebar-container">
                    <div className="sidebar-content">
                        <h2>Hi, I'm Xyz</h2>
                        <i className="uil uil-eye-slash sidebar-close" onClick={handleSidebar} id="sidebar-close"></i>
                    </div>
                    <div className="sidebar-content">
                        <div className="sidebar-social">
                            <a href="https://www.linkedin.com/in/xyz-fiegalan-253592136/" className="sidebar-social-icon">
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                            <a href="https://github.com/CryptoPH-Xyz" className="sidebar-social-icon">
                                <i className="uil uil-github-alt"></i>
                            </a>
                            <a href="https://www.instagram.com/xyz_rf/" className="sidebar-social-icon">
                                <i className="uil uil-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/XyzFiegalan" className="sidebar-social-icon">
                                <i className="uil uil-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/XyzFiegs" className="sidebar-social-icon">
                                <i className="uil uil-twitter-alt"></i>
                            </a>
                        </div>
                        <img src={Profile} alt="Profile" className="sidebar-profile"/>
                    </div>

                    <div className="sidebar-data">
                        <p className="sidebar-description">
                            Blockchain Developer that believes in <b> Decentralization </b> 
                            as means to achieve <i>Financial Inclusion</i>.
                        </p>
                    </div>
                        <div className="sidebar-buttons">
                            <a download="" href={Resume} className="button button-flex sidebar-button">
                                Download CV <i className="uil uil-download-alt button-icon-down"></i>
                            </a>
                        </div>
                    <div className="sidebar-contact-data">
                        <div className="sidebar-info">
                            <i className="uil uil-envelope-alt sidebar-icon"></i>
                            <div>
                                <h3 className="sidebar-title">Email</h3> 
                                <span className="sidebar-subtitle">xyzfiegalan@gmail.com</span>
                            </div>
                        </div>

                        <div className="sidebar-info">
                            <i className="uil uil-mobile-android-alt sidebar-icon"></i>
                            <div>
                                <h3 className="sidebar-title">Mobile</h3>
                                <span className="sidebar-subtitle">(+63) 977-679-0375</span>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-buttons">
                        <a href="#contact" className="button button-flex sidebar-button">
                            Contact Me <i className="uil uil-comment-dots button-icon"></i>
                        </a>
                    </div>
                </div>
            : null}
            <div className="nav">
                <div onClick={handleSidebar}>
                    <img src={Avatar} alt="Avatar" className="nav-avatar" />
                </div>
                {showMenu ?
                <div className="nav-menu" id="nav-menu">
                    <ul className="nav-list grid">
                        <li className="nav-item">
                            <a href="#home" className="nav-link" onClick={handleMenu}>
                                <i className="uil uil-estate nav-icon"></i> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#experience" className="nav-link" onClick={handleMenu}>
                            <i className="uil uil-book-open nav-icon"></i> Experience
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link" onClick={handleMenu}>
                            <i className="uil uil-constructor nav-icon"></i> Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link" onClick={handleMenu}>
                            <i className="uil uil-award nav-icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#certificates" className="nav-link" onClick={handleMenu}>
                            <i className="uil uil-graduation-cap nav-icon"></i> Certificates
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" onClick={handleMenu}>
                            <i className="uil uil-navigator nav-icon"></i> Contact Me
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-eye-slash nav-close" onClick={handleMenu} id="nav-close"></i>
                </div>
                : null}
                <div className="nav-btns">
                    <div className="nav-toggle" id="nav-toggle">
                        <i className="uil uil-bars" onClick={handleMenu}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
