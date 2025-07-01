import React, { useEffect } from 'react';
import './Work.css';
import whatidomern from './assets/whatidomern.png';
import whatidosoftware from './assets/whatidosoftware.png';

function Work() {
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
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const match = elements.find(el =>
                            entry.target.classList.contains(el.selector.replace('.', ''))
                        );
                        if (match) entry.target.classList.add(match.class);
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
            <div className="workmain">
                <h2 className='whatido'>What I Do?</h2>

                <div className="work1">
                    <div className="imgwhatido">
                        <img src={whatidomern} alt="Full Stack Development" />
                    </div>
                    <div className="workpost1">
                        <h2 className='desg1'>Full Stack Development</h2>
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
                        <h2 className='desg2'>Software Developer</h2>
                        <p>⚡ Designed and developed high-performance software applications using C++.</p>
                        <p>⚡ Implemented clean, efficient, and scalable code adhering to industry best practices.</p>
                        <p>⚡ Conducted thorough code reviews to ensure code quality and maintainability.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
