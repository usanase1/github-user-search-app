import React, { useState } from 'react';
import SearchIcon from '../assets/icon-search.svg';

function SearchBar({ fetchUserData }) {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    fetchUserData(input);
  };

  return (
    <form onSubmit={handleSearch} className="flex bg-lightCard dark:bg-darkCard p-2 rounded-xl shadow-md relative">
      <img
        src={SearchIcon}
        alt="Search Icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5"
      />
      <input
        type="text"
        className="flex-grow pl-12 bg-transparent outline-none text-primaryText dark:text-whiteText placeholder-secondaryText dark:placeholder-grayText"
        placeholder="Search GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue text-white py-2 px-4 rounded-lg hover:bg-blue/90 transition-all"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;