import React from 'react';
import MoonIcon from '../assets/icon-moon.svg';
import SunIcon from '../assets/icon-sun.svg';

function ThemeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button 
      onClick={toggleDarkMode} 
      className="text-sm font-semibold tracking-widest text-secondaryText dark:text-whiteText flex items-center gap-2"
    >
      {darkMode ? 'LIGHT' : 'DARK'}
      <img 
        src={darkMode ? SunIcon : MoonIcon} 
        alt={darkMode ? 'Light Mode' : 'Dark Mode'} 
        className="w-5 h-5" 
      />
    </button>
  );
}

export default ThemeToggle;