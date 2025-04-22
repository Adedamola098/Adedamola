import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Element } from "react-scroll";

const Contact1 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Attempting to send email...");

    emailjs
      .sendForm(
        "service_st3rxcf",
        "template_w7pyjdg",
        form.current,
        "j2kluwE3xwjaaAAmx"
      )
      .then(() => {
        console.log("Email sent successfully!");
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Message failed to send: " + error.text);
      });
  };

  return (
    <Element name="contact">
      <section className="bg-white dark:bg-[#1f1f1f] text-black dark:text-white py-20 px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-700 dark:text-blue-400">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8 bg-gray-100 dark:bg-[#2c2c2c] p-8 rounded-2xl shadow-lg"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 text-lg rounded border border-gray-400 dark:bg-[#3a3a3a]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 text-lg rounded border border-gray-400 dark:bg-[#3a3a3a]"
            />
            <select
              name="subject"
              required
              className="w-full p-4 text-lg rounded border border-gray-400 dark:bg-[#3a3a3a]"
            >
              <option value="">Select a Subject</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Consultation">Consultation</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="6"
              className="w-full p-4 text-lg rounded border border-gray-400 dark:bg-[#3a3a3a]"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-700 hover:to-blue-700 text-white py-4 rounded-xl font-bold text-xl shadow-lg transition duration-300"
            >
              Send Message 🚀
            </button>
          </form>

          {/* Social Links */}
          <div className="flex flex-col justify-center items-center gap-8">
            <h3 className="text-2xl font-semibold">Connect with me</h3>
            <div className="flex justify-center gap-8 text-5xl">
              <a
                href="https://github.com/Adedamola098"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-blue-600 transition duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/damola-isreal-53654732b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-600 transition duration-300" />
              </a>
              <a
                href="https://x.com/DML57041634"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-blue-600 transition duration-300" />
              </a>
              <a
                href="https://wa.me/2349067422592"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="hover:text-green-500 transition duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-5xl mx-auto w-full">
          <iframe
            title="My Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.891518362721!2d3.379205715337116!3d6.524379995297491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d2b6c197457%3A0xf4c75aa437ad3dc3!2sLagos!5e0!3m2!1sen!2sng!4v1643458604981!5m2!1sen!2sng"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            className="rounded-2xl shadow-xl"
          ></iframe>
        </div>
      </section>
    </Element>
  );
};

export default Contact1;
