import React from 'react';
import emailjs from "emailjs-com";

export default function ContactForm() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_wv9wx4f', 'template_zqpipvf', e.target, 'user_SSVgif1q6gAx9I4XvFSDb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    return (
        <form className="contact-form grid" onSubmit={sendEmail}>
            <div className="contact-inputs grid">
                <div className="contact-content">
                    <h3 className="contact-form-header">Contact Form</h3>
                    <label for="" className="contact-label">Name</label>
                    <input type="text" className="contact-input" name="name"></input>

                    <label for="" className="contact-label">Email *</label>
                    <input type="email" className="contact-input" name="email" required></input>
                
                    <label for="" className="contact-label">Subject</label>
                    <input type="text" className="contact-input" name="subject"></input>

                    <label for="" className="contact-label">Message *</label>
                    <textarea id="" cols="0" rows="7" className="contact-input" name="message" required></textarea>
                </div>
            </div>
            <div className="contact-button">
                <input type="submit" value="Send" className="button button-flex contact-send"></input>    
            </div>
        </form>
    )
}
