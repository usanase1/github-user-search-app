/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightBg: '#F6F8FF',
        lightCard: '#FEFEFE',
        darkBg: '#141D2F',
        darkCard: '#1E2A47',
        primaryText: '#2B3442',
        secondaryText: '#697C9A',
        whiteText: '#FFFFFF',
        blue: '#0079FF',
        grayText: '#C5D1F0',
        errorRed: '#F74646',
      },
      fontSize: {
        'xxl': '1.75rem',  
      },
    },
  },
  plugins: [],
}
