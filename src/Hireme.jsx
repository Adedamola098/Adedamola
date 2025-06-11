import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const HireMe = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_st3rxcf",
        "template_w7pyjdg",
        formRef.current,
        "j2kluwE3xwjaaAAmx"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          onClose();
          setSending(false);
        },
        (error) => {
          console.error(error.text);
          alert("An error occurred, please try again.");
          setSending(false);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#1f1f1f] text-white p-8 rounded-xl max-w-xl w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal close on input click
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold z-10 hover:text-red-400 transition duration-300"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center">Hire Me</h2>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-[#333] rounded border border-gray-600"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Gmail"
              required
              className="w-full p-3 bg-[#333] rounded border border-gray-600"
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Your Phone Number"
              required
              className="w-full p-3 bg-[#333] rounded border border-gray-600 md:col-span-2"
            />
            <select
              name="user_service"
              required
              className="w-full p-3 bg-[#333] rounded border border-gray-600 md:col-span-2"
            >
              <option value="">Select a Service</option>
              <option value="React Development">React Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Full Stack Project">Full Stack Project</option>
              <option value="Website Redesign">Website Redesign</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 bg-[#333] rounded border border-gray-600"
          />

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded mt-4 text-lg font-semibold transition duration-300"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireMe;
