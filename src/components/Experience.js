import React, { useState } from 'react'

export default function Experience() {   
    const [education, setEducation] = useState(true);
    const [work, setWork] = useState(false);

    const workSwitch = () => {
        setEducation(false);
        setWork(true);
    }

    const educationSwitch = () => {
        setEducation(true);
        setWork(false);
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
                            </div>
                        </div>
                    </div>
                : null}
                <div className="experience-buttons">
                    <a download="" href="src/pdf/Resume.pdf" className="button button-flex experience-button">
                        Download CV <i className="uil uil-download-alt button-icon-down"></i>
                    </a>

                    <a href="#contact" className="button button-flex experience-button">
                        Contact Me <i className="uil uil-comment-dots button-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}