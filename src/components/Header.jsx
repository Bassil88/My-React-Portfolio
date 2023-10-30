import { useState } from "react";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark_mode");
  };

  return (
    <header>
      <nav className="nav-container">
        <ul className="nav-container-ul">
          <li className="nav-container-li">
            <a href="#about">About me</a>
          </li>
          <li className="nav-container-li">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-container-li">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <input
        className="toggle"
        id="dark_mode_button"
        type="checkbox"
        onClick={toggleDarkMode}
      />
    </header>
  );
};
