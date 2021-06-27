import React from 'react';
import Xyz from '../pictures/Homepage-Xyz.png';

export default function Home() {
    return (
        <div className="home section" id="home">
            <h2 className="section-title">Xyz Fiegalan</h2>
            <span className="section-subtitle">My Introdution</span>

            <div className="home-container container grid">
                <img src={Xyz} alt="Xyz" className="home-img"/>
                <div className="home-data">
                    <div className="home-grid-content">
                        <div className="home-grid-header">
                            <h3 className="home-grid-title">
                                <i className="uil uil-monitor home-icon"></i> Blockchain Developer
                            </h3>
                            <span className="home-grid-subtitle"> DApps, NFTs</span>
                        </div>
                        <p className="home-description">                      
                            Aspiring Blockchain & Smart Contract developer that uses Solidity to build 
                            secure DApps such as Decentralized Exchanges <b> (DEX)</b>,
                            Crypto-Wallets, and NFTs.<br/>
                            Having an<b> Economics</b> background helps me to identify & exploit business 
                            opportunities caused by market inefficiencies, and predict, to certain degree,
                            how the market would respond and its significance to the economy.
                        </p>
                        <div className="home-info">
                            <span className="home-info-title">08</span>
                            <span className="home-info-name">Blockchain <br/> Certificates </span>
                        </div>
                    </div>
                </div>
                <div className="home-buttons">
                    <a download="" href="src/pdf/Resume.pdf" className="button button-flex home-button">
                        Download CV <i className="uil uil-download-alt button-icon-down"></i>
                    </a>

                    <a href="#contact" className="button button-flex home-button">
                        Contact Me <i className="uil uil-comment-dots button-icon"></i>
                    </a>
                </div>
                <div className="home-social">
                    <a href="https://www.linkedin.com/in/xyz-fiegalan-253592136/" className="home-social-icon">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://github.com/CryptoPH-Xyz" className="home-social-icon">
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a href="https://www.instagram.com/xyz_rf/" className="home-social-icon">
                        <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/XyzFiegalan" className="home-social-icon">
                        <i className="uil uil-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/XyzFiegs" className="home-social-icon">
                        <i className="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div> 
        </div>
    )
}
