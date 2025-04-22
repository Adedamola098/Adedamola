import React, { useState } from 'react';
import { Element } from 'react-scroll';
import HireMe from './Hireme';
import './App.css';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Element name="home" className="bg-white dark:bg-[#1f1f1f] py-12 text-black dark:text-white">
        <section
          style={{
            backgroundImage: `url('/assets/Ba.jpg')`,
          }}
          className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

          {/* Content */}
          <div className="z-10 px-4 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24 max-w-4xl text-center lg:text-left animate-fadeIn">
            <h1 className="fontss text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6">
              Let's Build Something Great Together
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 mb-8">
              I'm a Web Developer based in Lagos, Nigeria. I create modern, responsive web apps using the latest tech.
              Passionate about clean code, intuitive design, and learning every day.
            </p>

            {/* Hire Me Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-md fonts_text"
            >
              Hire Me
            </button>
          </div>
        </section>
      </Element>

      {/* Modal OUTSIDE section */}
      <HireMe isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Home;
