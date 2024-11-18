"use client";

import { useState } from "react";
import Image from "next/image";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="border-r border-blue-900 pr-6 lg:mb-8 lg:border-b lg:border-r-0 lg:p-8"
    >
      {theme === "light" ? (
        <Image src="/icons/moon.svg" alt="moon icon" width={20} height={20} />
      ) : (
        <Image src="/icons/sun.svg" alt="sun icon" width={20} height={20} />
      )}
    </button>
  );
};
