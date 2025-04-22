/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: '#1f1f1f',
        secondary: '#333333',
        accent: '#00ffcc',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
