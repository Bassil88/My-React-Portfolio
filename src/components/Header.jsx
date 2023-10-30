export const Header = () => {
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
      <input className="toggle" id="dark_mode_button" type="checkbox" />
    </header>
  );
};
