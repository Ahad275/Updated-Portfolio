import React, { useEffect, useState } from 'react';
import './IntroWork.css';

import imageintro from './assets/imageintro.png';
import whatidomern from './assets/whatidomern.png';
import whatidosoftware from './assets/whatidosoftware.png';

import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faLinkedin, faXTwitter, faFacebook, faInstagram, faEnvelope);

function IntroWork() {
  const titles = ['Frontend Developer', 'Full Stack Developer', 'Software Developer'];
  const [title, setTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fullTitle = titles[currentIndex];
    const handleTyping = () => {
      setTitle((prev) =>
        isDeleting ? fullTitle.substring(0, prev.length - 1) : fullTitle.substring(0, prev.length + 1)
      );

      if (!isDeleting && title === fullTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && title === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(typingInterval);
  }, [title, isDeleting, currentIndex]);

  useEffect(() => {
    const elements = [
      { selector: '.whatido', class: 'animate-whatido' },
      { selector: '.workpost1', class: 'animate-workpost1' },
      { selector: '.workpost2', class: 'animate-workpost2' },
      { selector: '.imgwhatido', class: 'animate-imgwhatido' },
      { selector: '.imgwhatido2', class: 'animate-imgwhatido2' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = elements.find((el) =>
              entry.target.classList.contains(el.selector.replace('.', ''))
            );
            if (matched) entry.target.classList.add(matched.class);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(({ selector }) => {
      const el = document.querySelector(selector);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pagebody">
      {/* Intro Section */}
      <div className="main">
        <div className="intro">
          <h3 className="myname">Mohammad Ahad</h3>
          <h4 className="title">
            <span className="black-text">I'm a</span> {title}
          </h4>
          <p className="description">
            A passionate individual who always thrives to work on end-to-end products which develop
            sustainable and scalable social and technical systems to create impact.
          </p>
          <nav>
            <ul className="SocialMediaButton">
              <li>
                <a href="https://github.com/Ahad275" target="_blank" rel="noopener noreferrer">
                  <button className="gitbut">
                    <FontAwesomeIcon icon={faGithub} />
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mohammad-ahad-633719227/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="linkedinbut">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </button>
                </a>
              </li>
              <li>
                <a href="mailto:ahadaa9369@gmail.com">
                  <button className="emailbut">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </button>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/m_ahad275" target="_blank" rel="noopener noreferrer">
                  <button className="instabut">
                    <FontAwesomeIcon icon={faInstagram} />
                  </button>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <button className="twitterbut">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </button>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <button className="fbbut">
                    <FontAwesomeIcon icon={faFacebook} />
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="imageintro">
          <img src={imageintro} alt="Intro" />
        </div>
      </div>

      {/* Work Section */}
      <div className="workmain">
        <h2 className="whatido">What I Do?</h2>

        <div className="work1">
          <div className="imgwhatido">
            <img src={whatidomern} alt="Full Stack Development" />
          </div>
          <div className="workpost1">
            <h2 className="desg1">Full Stack Development</h2>
            <p>⚡ Building responsive website front end using React.</p>
            <p>⚡ Developing Web applications using HTML, CSS, Bootstrap, JavaScript & React.</p>
            <p>⚡ Creating application backend in Node, Express, MongoDB & Mongoose.</p>
          </div>
        </div>

        <div className="work2">
          <div className="imgwhatido2">
            <img src={whatidosoftware} alt="Software Development" />
          </div>
          <div className="workpost2">
            <h2 className="desg2">Software Developer</h2>
            <p>⚡ Designed and developed high-performance software applications using C++.</p>
            <p>⚡ Implemented clean, efficient, and scalable code adhering to industry best practices.</p>
            <p>⚡ Conducted thorough code reviews to ensure code quality and maintainability.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroWork;
