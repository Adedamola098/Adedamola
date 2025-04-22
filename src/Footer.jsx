import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  pb-6  border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Sitemap */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Site Map</h3>
          <ul className="space-y-2 text-sm">
            {["home", "about", "services", "projects", "contact"].map((section, i) => (
              <li key={i}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:text-blue-400 transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-sm mb-1">📞 (123) 456-7890</p>
          <p className="text-sm">✉️ example@example.com</p>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-700 pt-4 text-sm text-gray-400">
        &copy; 2025 Adegboyega Adedamola. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
