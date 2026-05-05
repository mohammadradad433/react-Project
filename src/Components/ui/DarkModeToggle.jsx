import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggleDark = () => {
    setDark(prev => !prev);
  };

  return (
    <button
      onClick={toggleDark}
      className="px-3 py-2 rounded-md text-lg transition
        bg-gray-200 text-gray-800 hover:bg-gray-300
        dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600
      "
    >
      {dark ? "☀" : "🌙"}
    </button>
  );
}