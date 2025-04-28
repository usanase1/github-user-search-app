import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? true : false;
  });

  const fetchUserData = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      if (data.message === 'Not Found') {
        setError('No results');
        setUser(null);
      } else {
        setUser(data);
      }
    } catch (err) {
      setError('Error fetching data');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-darkBg' : 'bg-lightBg'} transition-all`}>
      <div className="container max-w-3xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-primaryText dark:text-whiteText">devfinder</h1>
          <ThemeToggle toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        </div>

        <SearchBar setUsername={setUsername} fetchUserData={fetchUserData} />

        {loading && <div className="text-center mt-6">Loading...</div>}
        {error && <div className="text-errorRed text-center mt-6">{error}</div>}
        {user && <UserCard user={user} />}
      </div>
    </div>
  );
}

export default App;
