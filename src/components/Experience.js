import React, { useState } from 'react';
import ResumePic from '../pictures/pdf/Xyz-Resume.png';
import Resume from '../pdf/Resume.pdf';

export default function Experience() {   
    const [education, setEducation] = useState(true);
    const [work, setWork] = useState(false);
    const [resume, setResume] = useState(false);

    const workSwitch = () => {
        setEducation(false);
        setWork(true);
    }

    const educationSwitch = () => {
        setEducation(true);
        setWork(false);
    }

    const resumeSwitch = () => {
        setResume(old => !old)
    }

    return (
        <div className="experience section" id="experience">
            <h2 className="section-title">Experience</h2>
            <span className="section-subtitle">My Journey</span>

            <div className="experience-container container">
                <div className="experience-tabs">
                    <div className="toggle-button button-flex" onClick={educationSwitch}>
                        <i className="uil uil-graduation-cap toggle-icon"></i> Education
                    </div>
                    <div className="toggle-button button-flex" onClick={workSwitch}>
                        <i className="uil uil-suitcase-alt toggle-icon"></i> Work
                    </div>
                </div>
                {education ? 
                    <div className="experience-content">
                        <div className="experience-data">
                            <div className="data-right">
                                <div className="experience-calendar">
                                    <i className="uil uil-calendar-alt"></i> 2014 - 2018
                                </div>
                                <h3 className="experience-title">(BS) Business Administration Major in Economics</h3>
                                <span className="experience-subtitle">Philippines - Central Luzon State University <br/> Cum Laude</span>
                            </div>
                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>
                        </div>

                        <div className="experience-data">
                            <div></div>
                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>
                            <div>
                                <div className="experience-calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2021
                                </div>
                                <h3 className="experience-title">(MA) Economics</h3>
                                <span className="experience-subtitle">Philippines - University of the Philippines, Diliman<br/> PCED Fellow</span>
                            </div>
                        </div>

                        <div className="experience-data">
                            <div className="data-right">
                                <div className="experience-calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                                <h3 className="experience-title">Blockchain Student</h3>
                                <span className="experience-subtitle">Sweden - Ivan on Tech Blockchain Academy (online)</span>
                            </div>
                            <div>
                                <span className="experience-rounder"></span>
                            </div>
                        </div>
                    </div>
                : null}

                {work ? 
                    <div className="experience-content"> 
                        <div className="experience-data">
                        <div></div>
                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>      
                            </div>
                            <div>
                                <div className="experience-calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 (Jan - March)
                                </div>
                                <h3 className="experience-title">Billing Specialist (Trainee)</h3>
                                <span className="experience-subtitle">Philippines - AFPMBAI</span>
                            </div>
                        </div>

                        <div className="experience-data">
                            <div className="data-right">
                                <div className="experience-calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 (Jan - June)
                                </div>
                                <h3 className="experience-title">Graduate Teaching Fellow</h3>
                                <span className="experience-subtitle">Philippines - University of the Philippines, Diliman</span>
                            </div>
                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span> 
                            </div>
                        </div>

                        <div className="experience-data">
                            <div></div>
                            <div>
                                <span className="experience-rounder"></span>                                    
                            </div>
                            <div>
                                <div className="experience-calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 (July - Present)
                                </div>
                                <h3 className="experience-title">Blockchain & Frontend Developer</h3>
                                <span className="experience-subtitle">Mirage Foundation (Startup)</span>
                            </div>
                        </div>

                    </div>
                : null}
                <div className="experience-buttons">
                    <div className="button button-flex experience-button" onClick={resumeSwitch}>
                        View CV <i className="uil uil-search-plus button-icon"></i>
                    </div>

                    <a href="#contact" className="button button-flex experience-button">
                        Contact Me <i className="uil uil-comment-dots button-icon"></i>
                    </a>
                </div>
                {resume ? 
                    <div className="modal-resume">
                        <div className="modal-with-scrollbar">
                            <img src={ResumePic} alt="Resume" className="resume-img" />
                            <div className="modal-button">
                                <a download="" href={Resume} className="button button-flex sidebar-button">
                                    Download CV <i className="uil uil-download-alt button-icon-down"></i>
                                </a>
                            </div>
                        </div>
                        <i className="uil uil-times resume-close" onClick={resumeSwitch}></i>
                    </div>
                : null}
            </div>
        </div>
    )
}