import React from 'react';
import { Element } from 'react-scroll';
import {
  Monitor,
  Code,
  Server,
  Smartphone,
  Search,
  LifeBuoy,
} from 'lucide-react';
import './App.css'


const Services = () => {
  return (
    <Element name="services" className="bg-white dark:bg-[#1f1f1f] text-black dark:text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold font-Poppins fontss text-blue-500 mb-16">What I Do</h2>

        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Item Template */}
          {[
            {
              icon: <Monitor className="w-12 h-12 mx-auto mb-4 text-cyan-400" />,
              title: "Web Design & UI",
              desc: "I design user-friendly, modern, and responsive web interfaces that focus on user experience and creativity."
            },
            {
              icon: <Code className="w-12 h-12 mx-auto mb-4 text-green-400" />,
              title: "Frontend Development",
              desc: "Using React and Tailwind CSS, I build fast, scalable, and maintainable front-end applications."
            },
            {
              icon: <Server className="w-12 h-12 mx-auto mb-4 text-indigo-400" />,
              title: "Backend Integration",
              desc: "I integrate backend services and APIs to connect your frontend to powerful, real-time data and services."
            },
            {
              icon: <Smartphone className="w-12 h-12 mx-auto mb-4 text-pink-400" />,
              title: "Responsive Design",
              desc: "Websites that work on all devices—mobile, tablet, and desktop—with smooth responsiveness."
            },
            {
              icon: <Search className="w-12 h-12 mx-auto mb-4 text-yellow-400" />,
              title: "SEO Optimization",
              desc: "I follow best SEO practices to ensure your website is visible and ranks well on search engines."
            },
            {
              icon: <LifeBuoy className="w-12 h-12 mx-auto mb-4 text-red-400" />,
              title: "Maintenance & Support",
              desc: "After launch, I offer support and updates to keep your site secure and running smoothly."
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-[#2c2c2c] rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              {service.icon}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg text-gray-700 fonts_text dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Services;
