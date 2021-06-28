import React, { useState } from 'react'

export default function Skills() {
    const [frontSkills, setFrontSkills] = useState(false);
    const [blockchainSkills, setBlockchainSkills] = useState(true);
    const [otherSkills, setOtherSkills] = useState(false);

    const showFront = () => {
        setFrontSkills(oldValue => !oldValue)
    }
    const showBlockchain = () => {
        setBlockchainSkills(oldValue => !oldValue)
    }
    const showOther = () => {
        setOtherSkills(oldValue => !oldValue)
    }

    return (
        <div className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <span className="section-subtitle">Technical Level</span>

            <div className="skills-container container grid">
                <div>
                    <div className="skills-content">
                        <div className="skills-header">
                            <i className="uil uil-monitor skills-icon"></i>

                            <div>
                                <h1 className="skills-title">Blockchain Developer</h1>
                                <span className="skills-subtitle">2021</span>
                            </div>
                            <i className="uil uil-direction skills-arrow" onClick={showBlockchain}></i>
                        </div>
                        {blockchainSkills ?
                            <div className="skills-list grid">
                                <div className="skills-data">
                                    <div className="skills-titles">
                                        <h3 className="skills-name">Solidity</h3>
                                        <span className="skills-number">78%</span>
                                    </div>
                                    <div className="skills-bar">
                                        <span className="skills-percentage skills-solidity"></span>
                                    </div>
                                </div>
                                <div className="skills-data">
                                <div className="skills-titles">
                                        <h3 className="skills-name">Truffle</h3>
                                        <span className="skills-number">80%</span>
                                    </div>
                                    <div className="skills-bar">
                                        <span className="skills-percentage skills-truffle"></span>
                                    </div>
                                </div>
                            </div>
                        : null}
                    </div>

                    <div className="skills-content">
                        <div className="skills-header">
                            <i className="uil uil-brackets-curly skills-icon"></i>

                            <div>
                                <h1 className="skills-title">Frontend Developer</h1>
                                <span className="skills-subtitle">2021</span>
                            </div>
                            <i className="uil uil-direction skills-arrow" onClick={showFront}></i>
                        </div>
                        {frontSkills ? 
                            <div className="skills-list grid">
                                <div className="skills-data">
                                    <div className="skills-titles">
                                        <h3 className="skills-name">HTML</h3>
                                        <span className="skills-number">83%</span>
                                    </div>
                                    <div className="skills-bar">
                                        <span className="skills-percentage skills-html"></span>
                                    </div>
                                </div>
                                <div className="skills-data">
                                    <div className="skills-titles">
                                        <h3 className="skills-name">CSS</h3>
                                        <span className="skills-number">77%</span>
                                    </div>
                                    <div className="skills-bar">
                                        <span className="skills-percentage skills-css"></span>
                                    </div>
                                </div>
                                <div className="skills-data">
                                    <div className="skills-titles">
                                        <h3 className="skills-name">JavaScript</h3>
                                        <span className="skills-number">75%</span>
                                    </div>
                                    <div className="skills-bar">
                                        <span className="skills-percentage skills-js"></span>
                                    </div>
                                </div>
                                <div className="skills-data">
                                    <div className="skills-titles">
                                        <h3 className="skills-name">React</h3>
                                        <span className="skills-number">82%</span>
                                    </div>
                                    <div className="skills-bar">
                                        <span className="skills-percentage skills-react"></span>
                                    </div>
                                </div>
                            </div>
                        : null}
                    </div>

                    <div className="skills-content">
                        <div className="skills-header">
                            <i className="uil uil-user skills-icon"></i>

                            <div>
                                <h1 className="skills-title">Soft / Other Skills</h1>
                                <span className="skills-subtitle">2021</span>
                            </div>
                            <i className="uil uil-direction skills-arrow" onClick={showOther}></i>
                        </div>
                        {otherSkills ?                           
                            <div className="skills-data">
                                <div className="soft-skills">
                                    <div className="skills-header">
                                        <i className="uil uil-check-circle soft-icon-check"></i>
                                        <h3 className="skills-name">Cryptography</h3>
                                    </div>
                                    <div className="skills-header">
                                        <i className="uil uil-check-circle soft-icon-check"></i>
                                        <h3 className="skills-name">Interoperability</h3>
                                    </div>
                                    <div className="skills-header">
                                        <i className="uil uil-check-circle soft-icon-check"></i>
                                        <h3 className="skills-name">Blockchain Data Structures</h3>
                                    </div>
                                    <div className="skills-header">
                                        <i className="uil uil-check-circle soft-icon-check"></i>
                                        <h3 className="skills-name">Adaptability</h3>
                                    </div>
                                    <div className="skills-header">
                                        <i className="uil uil-check-circle soft-icon-check"></i>
                                        <h3 className="skills-name">Problem Solving</h3>
                                    </div>
                                    <div className="skills-header">
                                        <i className="uil uil-check-circle soft-icon-check"></i>
                                        <h3 className="skills-name">Team Player</h3>
                                    </div>
                                    <div className="skills-header">
                                        <i className="uil uil-check-circle soft-icon-check"></i>
                                        <h3 className="skills-name">Economics</h3>
                                    </div>
                                    <div className="skills-header">
                                        <i className="uil uil-check-circle soft-icon-check"></i>
                                        <h3 className="skills-name">Research</h3>
                                    </div>
                                </div>
                            </div>                         
                        : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
