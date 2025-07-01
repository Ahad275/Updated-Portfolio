import React from 'react';
import './Education.css';
import lpulogo from './assets/lpulogo.png';
import Eduactionmain from './assets/Educationmain.png';
import prabhatlogo from './assets/prabhatlogo.jpeg';
import certimggoogle from './assets/certimggoogle.png';
import mongodblogo from './assets/mongodblogo.png';
import reactlogo from './assets/reactlogo.jpeg';
import advreactlogo from './assets/advreactlogo.jpeg';
import nodejslogo from './assets/nodejslogo.png';
import computernetworkingimg from './assets/computernetworkingimg.webp';
import javascriptlogo from './assets/Javascriptlogo.png';

function Education() {
    return (
        <>
            <div className="pagebody">
                <div className="edumain">
                    <div className="mainimg">
                        <img src={Eduactionmain} alt="Intro" />
                    </div>
                    <div className="contenthead">
                        <h2>Education</h2>
                        <h3>Basic Qualification and Certifications</h3>
                    </div>
                </div>

                <div className="colldegree">
                    <h2>Education</h2>
                    <div className="edu1">
                        <div className="colllogo">
                            <img src={lpulogo} alt="Lovely Professional University Logo" />
                        </div>
                        <div className="graduate">
                            <h3 className="name">
                                Lovely Professional University <span className="years">2021 - 2025</span>
                            </h3>
                            <p>
                                B-Tech in Computer Science & Engineering--CGPA: 7.82
                                <span className="location">Phagwara, Punjab</span>
                            </p>
                        </div>
                    </div>
                    <div className="edu2">
                        <div className="schlogo">
                            <img src={prabhatlogo} alt="Prabhat Sen. Sec. Public School Logo" />
                        </div>
                        <div className="Intermediate">
                            <h3 className="name">
                                Prabhat Sen. Sec. Public School <span className="years">2020 - 2021</span>
                            </h3>
                            <p>
                                Intermediate -- Percentage: 94.6%
                                <span className="location">Kanpur, India</span>
                            </p>
                        </div>
                    </div>
                    <div className="edu3">
                        <div className="schlogo">
                            <img src={prabhatlogo} alt="Prabhat Sen. Sec. Public School Logo" />
                        </div>
                        <div className="matriculation">
                            <h3 className="name">
                                Prabhat Sen. Sec. Public School <span className="years">2018 - 2019</span>
                            </h3>
                            <p>
                                Matriculation -- Percentage: 93.6%
                                <span className="location">Kanpur, India</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="certhead">
                    <h2>Certifications</h2>
                    <div className="certificate">
                        <div className="cert1">
                            <a
                                href="https://learn.mongodb.com/c/s8t229yhTYmfc01aURLslw"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={mongodblogo} alt="MongoDB Logo" />
                                <div className="content-details fadeIn-top">
                                    <h3 className="content-title">Certificate</h3>
                                </div>
                            </a>
                            <h4>
                                Introduction To <br /> MongoDB
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
                                    <h3 className="content-title">Certificate</h3>
                                </div>
                            </a>
                            <h4>
                                Frontend App With <br /> React
                            </h4>
                        </div>
                        <div className="cert1">
                            <a
                                href="https://coursera.org/verify/D9KFDDENCP6Z"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={advreactlogo} alt="Advanced React Logo" />
                                <div className="content-details fadeIn-top">
                                    <h3 className="content-title">Certificate</h3>
                                </div>
                            </a>
                            <h4>
                                Advanced <br /> React
                            </h4>
                        </div>
                        <div className="cert1">
                            <a
                                href="https://coursera.org/verify/B6PWG4G8MFY9"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={nodejslogo} alt="Node.js Logo" />
                                <div className="content-details fadeIn-top">
                                    <h3 className="content-title">Certificate</h3>
                                </div>
                            </a>
                            <h4>Server-Side JavaScript With Node.js</h4>
                        </div>
                        <div className="cert1">
                            <a href="https://coursera.org/verify/DSGTDAG2XCLQ" target="_blank" rel="noopener noreferrer">
                                <img src={computernetworkingimg} alt="Stanford Course Logo" />
                                <div className="content-details fadeIn-top">
                                    <h3 className="content-title">Certificate</h3>
                                </div>
                            </a>
                            <h4> The Bits and Bytes of Computer Networking</h4>
                        </div>
                        <div className="cert1">
                            <a href="https://drive.google.com/file/d/1gjGy0h_x9QrEYpZTpkC9XI_OtVN4ATnp/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                                <img src={javascriptlogo} alt="JavaScript Logo" />
                                <div className="content-details fadeIn-top">
                                    <h3 className="content-title">Certificate</h3>
                                </div>
                            </a>
                            <h4>
                                Frontend App With <br /> React
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;
