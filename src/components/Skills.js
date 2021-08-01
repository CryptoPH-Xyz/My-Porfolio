import React, { useState } from 'react';
import styled from "styled-components";

export default function Skills() {
    const [frontSkills, setFrontSkills] = useState(false);
    const [blockchainSkills, setBlockchainSkills] = useState(true);
    const [otherSkills, setOtherSkills] = useState(false);

    const solidity = 85;
    const truffle = 78;
    const web3 = 82;
    const html = 90;
    const css = 90;
    const javascript = 85;
    const react = 85;

    const SkillsBar = styled.div`
        background: hsl(176, 63%, 67%);
    `;

    const Solidity = styled.div`
        display: block;
        background: hsl(176, 74%, 28%);
        width: ${solidity}%;
    `;

    const Truffle = styled.div`
        display: block;
        background: hsl(176, 74%, 28%);
        width: ${truffle}%;
    `;

    const Web3 = styled.div`
        display: block;
        background: hsl(176, 74%, 28%);
        width: ${web3}%;
    `;

    const Html = styled.div`
        display: block;
        background: hsl(176, 74%, 28%);
        width: ${html}%;
    `;

    const Css = styled.div`
        display: block;
        background: hsl(176, 74%, 28%);
        width: ${css}%;
    `;

    const Javascript = styled.div`
        display: block;
        background: hsl(176, 74%, 28%);
        width: ${javascript}%;
    `;

    const ReactBar = styled.div`
        display: block;
        background: hsl(176, 74%, 28%);
        width: ${react}%;
    `;
        

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
                                        <span className="skills-number">{solidity}%</span>
                                    </div>
                                    <SkillsBar className="data-bar">
                                        <Solidity className="data-percentage"></Solidity>
                                    </SkillsBar>
                                </div>
                                <div className="skills-data">
                                    <div className="skills-titles">
                                        <h3 className="skills-name">Truffle</h3>
                                        <span className="skills-number">{truffle}%</span>
                                    </div>
                                    <SkillsBar className="data-bar">
                                        <Truffle className="data-percentage"></Truffle>
                                    </SkillsBar>
                                </div>
                                <div className="skills-data">
                                    <div className="skills-titles">
                                        <h3 className="skills-name">Web3.js</h3>
                                        <span className="skills-number">{web3}%</span>
                                    </div>
                                    <SkillsBar className="data-bar">
                                        <Web3 className="data-percentage"></Web3>
                                    </SkillsBar>
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
                                        <span className="skills-number">{html}%</span>
                                    </div>
                                    <SkillsBar className="data-bar">
                                        <Html className="data-percentage"></Html>
                                    </SkillsBar>
                                </div>
                                <div className="skills-data">
                                    <div className="skills-titles">
                                        <h3 className="skills-name">CSS</h3>
                                        <span className="skills-number">{css}%</span>
                                    </div>
                                    <SkillsBar className="data-bar">
                                        <Css className="data-percentage"></Css>
                                    </SkillsBar>
                                </div>
                                <div className="skills-data">
                                    <div className="skills-titles">
                                        <h3 className="skills-name">JavaScript</h3>
                                        <span className="skills-number">{javascript}%</span>
                                    </div>
                                    <SkillsBar className="data-bar">
                                        <Javascript className="data-percentage"></Javascript>
                                    </SkillsBar>
                                </div>
                                <div className="skills-data">
                                    <div className="skills-titles">
                                        <h3 className="skills-name">React</h3>
                                        <span className="skills-number">{react}%</span>
                                    </div>
                                    <SkillsBar className="data-bar">
                                        <ReactBar className="data-percentage"></ReactBar>
                                    </SkillsBar>
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
