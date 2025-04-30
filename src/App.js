import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  const fetchUserData = async (username) => {
    if (!username) {
      setError("Please enter a username");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      if (data.message === "Not Found") {
        setError("No results");
        setUser(null);
      } else {
        setUser(data);
      }
    } catch (err) {
      setError("Error fetching data");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    fetchUserData("octocat");
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-darkBg" : "bg-lightBg"
      } transition-colors duration-500`}
    >
      <div className="container max-w-3xl mx-auto p-6 md:p-8 lg:p-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primaryText dark:text-whiteText transition-colors duration-500">
            devfinder
          </h1>
          <ThemeToggle
            toggleDarkMode={() => setDarkMode(!darkMode)}
            darkMode={darkMode}
          />
        </div>

        <SearchBar setUsername={setUsername} fetchUserData={fetchUserData} />

        <div className="mt-6">
          {loading && (
            <div className="text-center text-secondaryText dark:text-grayText">
              Loading...
            </div>
          )}
          {error && <div className="text-center text-errorRed">{error}</div>}
          {user && <UserCard user={user} />}
        </div>
      </div>
    </div>
  );
}

export default App;
