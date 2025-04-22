import React from 'react';
import { Element } from 'react-scroll';

const blogPosts = [
  {
    title: 'Why Responsive Design Matters in 2025',
    date: 'April 20, 2025',
    summary: 'Responsive web design ensures your site looks great on all devices. Learn why it’s more important than ever.',
    image: '/assets/close-up-mobile-phone-table_1048944-9685426.jpg',
  },
  {
    title: 'Top 5 React Libraries You Should Know',
    date: 'April 15, 2025',
    summary: 'From Framer Motion to Zustand, discover powerful libraries that can supercharge your React projects.',
    image: '/assets/website-development-layout-sketch-drawing_53876-21827.jpg',
  },
  {
    title: 'Dark Mode Done Right',
    date: 'April 10, 2025',
    summary: 'Dark mode is more than a trend. Explore how to implement it beautifully with Tailwind and React.',
    image: '/assets/man-using-laptop-table_1048944-28705674.jpg',
  },
];

const Blog = () => {
  return (
    <Element name="blog" className="dark:bg-[#1f1f1f] bg-white py-16 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest Blog Posts</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white dark:bg-[#2a2a2a] shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
                <p className="text-base leading-relaxed">{post.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Blog;
