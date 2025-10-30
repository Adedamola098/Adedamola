import React from 'react';
import { Element } from 'react-scroll';

const projects = [
  {
    title: "Bakerz — Bakery Store",
    description:
      "A bakery-themed e-commerce site with product filtering, cart system, special offers, and responsive UI. Built using React, TailwindCSS, and localStorage.",
    imageUrl: "/assets/Screenshot_22-4-2025_131253_bakerz-ten.vercel.app.jpeg",
    link: "https://bakerz.netlify.app"
  },
  {
    title: "MediPlus — Hospital Website",
    description:
      "A responsive hospital website featuring department listings, doctor profiles, appointment booking, and contact forms. Built for accessibility and ease of use.",
    imageUrl: "/assets/Screenshot_22-4-2025_143146_localhost.jpeg",
    link: "https://house-pi-gray.vercel.app"
  },
  {
    title: "BSquare Gaming Venture",
    description:
      "A responsive gaming platform showcasing curated game collections and interactive features. Built with React and Tailwind CSS for seamless navigation and accessibility, curated by DML.DEV.",
    imageUrl: "/assets/Screenshot_21-5-2025_0131_bsquare-gaming-venture.netlify.app.jpeg",
    link: "https://bsquare-gaming-venture.netlify.app/"
  },
  {
    title: "Temidire Baptist Church",
    description:
      "A modern, responsive church website with service schedules, ministries, events, online donations, and contact sections. Built with React and Tailwind CSS for the ChristLight Baptist community.",
    imageUrl: "https://temidire-baptist-church.vercel.app/Youth.jpg",
    link: "https://temidire-baptist-church.vercel.app/"
  },
  {
    title: "Troll Trump — Meme Token Website",
    description:
      "A crypto-themed meme website showcasing the $TRUMP token, built with React and Tailwind CSS. Features animated sections, Solana-style gradient design, and a futuristic UI.",
    imageUrl: "https://troll-trump-meme-ui.vercel.app/meme-ui.jpg",
    link: "https://troll-trump-meme-ui.vercel.app/"
  },
  {
    title: "FurShield — Pet Care Brand",
    description:
      "A clean, modern landing page for a pet care and grooming brand. Includes product highlights, testimonials, and a responsive layout using React and Tailwind CSS.",
    imageUrl: "https://furshield-a3bc.onrender.com/static/assets/about.jpg",
    link: "https://furshield-a3bc.onrender.com/"
  }
];

const Projects = () => {
  return (
    <Element name="projects" className="bg-white dark:bg-[#1f1f1f] text-black dark:text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-blue-500 fontss mb-12">My Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-16">
          A showcase of real-world applications I've built — from e-commerce to UI/UX case studies.
        </p>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
