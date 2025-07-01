import React from 'react';
import './Project.css';

import Projectmain from './assets/Projectmain.png';

import examportal from './assets/examportal.png';
import reactlogo from './assets/reactlogo.jpeg';
import Portfolioproject from './assets/porfolioproject.png';
import textUtils from './assets/textutils.png';
import currencyconvt from './assets/currencyconvt.png';
import scientificcalci from './assets/scientificcalci.png';

function Project() {
    return (
        <>
            <div className="pagebody">
                <div className="promain">
                    <div className="mainimg">
                        <img src={Projectmain} alt="Intro" />
                    </div>
                    <div className="contenthead">
                        <h2>Project</h2>
                        <h3>
                            My projects utilize a wide array of the latest technology tools. My expertise lies in creating and deploying websites using various technologies.</h3>
                    </div>
                </div>

                <div className="certhead">
                    {/* <h2>Certifications</h2> */}
                    <div className="certificate">
                        <div className="cert1">
                            <a href="https://github.com/Ahad275/Lenscendence" target="_blank" rel="noopener noreferrer">
                                <img src={currencyconvt} alt="Stanford Course Logo" />
                                <div className="content-details fadeIn-top">
                                    <h3 className="content-title">See project</h3>
                                </div>
                            </a>
                            <h4> Lenscedence <br /> A Photography Website </h4>
                        </div>
                        <div className="cert1">
                            <a href="https://github.com/Ahad275/ResumeGenie-A-Resume-Builder-Website" target="_blank" rel="noopener noreferrer">
                                <img src={scientificcalci} alt="JavaScript Logo" />
                                <div className="content-details fadeIn-top">
                                    <h3 className="content-title">See Project</h3>
                                </div>
                            </a>
                            <h4>
                                ResumeGenie <br /> A Resume Builder Website
                            </h4>
                        </div>
                        <div className="cert1">
                            <a
                                href="https://github.com/Ahad275/Virtual-ICU-Visit"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={textUtils} alt="Node.js Logo" />
                                <div className="content-details fadeIn-top">
                                    <h3 className="content-title">See Project</h3>
                                </div>
                            </a>
                            <h4>Virtual Patient Monitoring System for Hospitals</h4>
                        </div>
                        <div className="cert1">
                            <a
                                href="https://ahad275.github.io/UpdatedPortfolio/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={Portfolioproject} alt="Portfolio" />
                                <div className="content-details fadeIn-top">
                                    <h3 className="content-title">See Project</h3>
                                </div>
                            </a>
                            <h4>
                                Portfolio
                            </h4>
                        </div>
                        
                        <div className="cert1">
                            <a
                                href="https://learn.mongodb.com/c/s8t229yhTYmfc01aURLslw"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={examportal} alt="MongoDB Logo" />
                                <div className="content-details fadeIn-top">
                                    <h3 className="content-title">See Project</h3>
                                </div>
                            </a>
                            <h4>
                                ClassTestify <br /> An Exam Portal
                            </h4>
                        </div>
                        <div className="cert1">
                            <a
                                href="https://coursera.org/verify/SB8Y7ML5FWRK"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={reactlogo} alt="React Logo" />
                                <div className="content-details fadeIn-top">
                                    <h3 className="content-title">See Project</h3>
                                </div>
                            </a>
                            <h4>
                                GrocerEase <br /> A Website for Grocery Shop
                            </h4>
                        </div>




                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
