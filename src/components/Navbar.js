import React, { useState } from 'react';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(oldValue => !oldValue)
    }

    return (
        <div className="navbar" id="navbar">
            <div className="nav">
                <a href="#sidebar" className="nav-logo">
                    <i className="uil uil-user nav-icon"></i>Xyz
                </a>
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
                            <i className="uil uil-file-check nav-icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#certificates" className="nav-link" onClick={handleMenu}>
                            <i className="uil uil-heart-sign nav-icon"></i> Hobbies
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
