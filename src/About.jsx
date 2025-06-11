import React from 'react';
import { Element } from 'react-scroll';


const About = () => {
  return (
    <Element name="about">
      <div className="flex flex-col lg:flex-row bg-white dark:bg-[#1f1f1f] text-black dark:text-white">
        
        <div className="px-6 md:px-20 py-16 w-full lg:w-1/2">
          <div className="max-w-3xl mx-auto text-center lg:text-left">
            <img
              src="/assets/Snapchat-649279938.jpg"
              alt="Profile"
              className="w-40 h-44 md:w-56 md:h-56 rounded-full object-cover mx-auto lg:mx-0 mb-8"
            />

            <h2 className="text-4xl md:text-5xl font-Poppins fontss mb-6 text-blue-500">
              Who Am I
            </h2>
            <div className='fonts_text'>
            <p className="text-lg md:text-xl leading-relaxed font-light text-gray-700 dark:text-gray-300">
              I’m a passionate <span className="font-semibold text-blue-600">Full Stack Web Developer</span> based in Lagos, Nigeria, with a strong focus on building clean, user‑centric, and performant web applications.
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-light mt-4 text-gray-700 dark:text-gray-300">
              My expertise lies in technologies like <span className="font-medium text-blue-600">React, Node.js, Express, MongoDB</span>, and modern front‑end tools like Tailwind CSS and Next.js. I thrive on turning complex problems into elegant, user‑friendly solutions.
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-light mt-4 text-gray-700 dark:text-gray-300">
              Whether it's a dynamic website, an interactive dashboard, or a full‑stack solution — I bring ideas to life with code, creativity, and a love for continuous learning.
            </p>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-20 py-16 w-full lg:w-1/2 bg-gray-100 dark:bg-[#2c2c2c]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-blue-500 font-bold mb-6 text-center lg:text-left">
              EXPERT <span className="text-blue-600">IN</span>
            </h2>
            <p className="text-lg mb-8 text-center lg:text-left text-gray-700 dark:text-gray-300">
              I specialize in front‑end development and UI/UX design. My focus is on creating intuitive and responsive user interfaces using modern technologies like React and Tailwind CSS.
            </p>

            {[
              { label: 'UI/UX DESIGN', percent: 95 },
              { label: 'SQL', percent: 90 },
              { label: 'JAVASCRIPT', percent: 90 },
              { label: 'TAILWIND CSS', percent: 95 },
              { label: 'REACT.JS', percent: 95 },
              { label: 'HTML', percent: 100 },
            ].map((skill, i) => (
              <div key={i} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-gray-100 dark:gray-700">{skill.label}</span>
                  <span className="font-medium text-gray-100 dark:bg-gray-700">{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
