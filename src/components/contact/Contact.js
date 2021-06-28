import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {    
    return (
        <div className="contact section" id="contact">
            <h2 className="section-title">Contact Me</h2>
            <span className="section-subtitle">I would love to hear from you!</span>

            <div className="contact-container container grid">
                <div>
                    <div className="contact-info">
                        <i className="uil uil-envelope-alt contact-icon"></i>
                        <div>
                            <h3 className="contact-title">Email</h3> 
                            <span className="contact-subtitle">xyzfiegalan@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact-info">
                        <i className="uil uil-user-location contact-icon"></i>
                        <div>
                            <h3 className="contact-title">Location</h3>
                            <span className="contact-subtitle">#8 Lopez St., Bagong Sikat, 
                                <br/> Science City of Muñoz, Nueva Ecija, 
                                <br/> Philippines, 3119
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="contact-info">
                        <i className="uil uil-mobile-vibrate contact-icon"></i>
                        <div>
                            <h3 className="contact-title">Mobile</h3>
                            <span className="contact-subtitle">(+63) 977-679-0375</span>
                        </div>
                    </div>
                    <div className="contact-info">
                        <i className="uil uil-discord contact-icon"></i>
                        <div>
                            <h3 className="contact-title">Discord</h3>
                            <span className="contact-subtitle">CryptoXyz <br/> #5729</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-form-container">
                <ContactForm />
            </div>
        </div>
    )
}
