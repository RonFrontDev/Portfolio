import Logo from "../Logo/Logo";
import "./Navbar.scss";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log("Button pressed");
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Logo />
      <ul className={`navbar__items ${isOpen ? "active" : ""}`}>
        <Logo isMobile />
        <li className="navbar__item">
          <a onClick={toggleMenu} className="navbar__link" href="#home">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a onClick={toggleMenu} className="navbar__link" href="#about">
            About
          </a>
        </li>
        <li className="navbar__item">
          <a onClick={toggleMenu} className="navbar__link" href="#projects">
            Projects
          </a>
        </li>
        <li className="navbar__item">
          <a onClick={toggleMenu} className="navbar__link" href="#experience">
            Experience
          </a>
        </li>
        <li className="navbar__item">
          <a onClick={toggleMenu} className="navbar__link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={toggleMenu}>
        {[1, 2, 3].map((item) => (
          <span
            key={item}
            className={classNames([
              "navbar__burger-line",
              isOpen ? "navbar__burger-line--close" : "",
            ])}
          />
        ))}
      </button>
    </nav>
  );
}

function classNames(classes) {
  return classes.join(" ");
}

export default Navbar;
