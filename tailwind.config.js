/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E293B', // LeetCode's dark background
        secondary: '#3B4D70', // Slightly lighter shade for accents
        accent: '#1866C7', // Blue color for buttons, links, etc.
        white: '#FFFFFF', // White text
        black: '#000000', // Black background
      },
    },
  },
  darkMode: 'media', // Automatically use dark mode based on system preference
  plugins: [],
};
