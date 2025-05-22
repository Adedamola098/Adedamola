import React, { useState } from "react";
import { Element } from "react-scroll";
import HireMe from './Hireme';

const pricingOptions = [
  {
    title: "WEB DESIGN",
    price: "$300",
    details: [
      "1 Initial Concepts",
      "Layered PSD",
      "3 Revisions",
      "100% Rights"
    ]
  },
  {
    title: "WEB DEV",
    price: "$350",
    details: [
      "2 Pages",
      "3 Revisions",
      "Clean Code",
      "W3C Validated"
    ]
  },
  {
    title: "UI/UX DESIGN",
    price: "$30",
    details: [
      "1 Initial Concepts",
      "Layered PSD",
      "3 Revisions",
      "100% Satisfaction"
    ]
  },
  {
    title: "LOGO DESIGN",
    price: "$5",
    details: [
      "2 Concepts",
      "3 Revisions",
      "Vector Logo",
      "100% Rights"
    ]
  }
];

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Element name="pricing" className="bg-white dark:bg-[#1f1f1f] text-black dark:text-white py-20 px-6">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-700 dark:text-blue-400">Pricing</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg border dark:border-gray-700 rounded-xl overflow-hidden flex flex-col transition hover:scale-105"
          >
            <div className="bg-blue-100 dark:bg-blue-900 text-center py-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
              Starting From
            </div>

            <div className="bg-blue-700 dark:bg-blue-500 text-white text-center py-6 text-3xl font-bold">
              {option.price}
              <p className="text-sm font-medium mt-1 text-white opacity-80">Negotiable</p>
            </div>

            <div className="p-4 flex-1">
              <h2 className="text-center text-xl font-semibold mb-4">{option.title}</h2>
              <ul className="space-y-2 text-sm text-center">
                {option.details.map((item, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div onClick={() => setIsModalOpen(true)} className="text-center mb-6">
              <button className="mt-auto bg-white dark:bg-transparent border border-black dark:border-white px-4 py-2 rounded hover:bg-blue-700 hover:text-white dark:hover:bg-white dark:hover:text-black transition">
                HIRE ME
              </button>
              <HireMe isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Pricing;
