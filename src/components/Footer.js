import React from 'react'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <a href="#home" className="footer-text">Xyz Fiegalan</a>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/xyz-fiegalan-253592136/" className="footer-social-icon">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>      
                    <a href="https://github.com/CryptoPH-Xyz" className="footer-social-icon">
                        <i className="uil uil-github-alt"></i>
                    </a>                  
                    <a href="https://www.instagram.com/xyz_rf/" className="footer-social-icon">
                        <i className="uil uil-instagram"></i>
                    </a>                
                    <a href="https://www.facebook.com/XyzFiegalan" className="footer-social-icon">
                        <i className="uil uil-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/XyzFiegs" className="footer-social-icon">
                        <i className="uil uil-twitter-alt"></i>
                    </a>
                </div>
                <div className="footer-copyright">
                    <i className="uil uil-copyright"></i> CryptoXyz
                </div>
            </div>
        </div>
    )
}
