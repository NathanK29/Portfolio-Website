import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
// import sunIcon from '../../../assets/images/sun.svg';
// import moonIcon from '../../../assets/images/moon.svg';

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <button onClick={toggleDarkMode}>
            <img
              src={isDarkMode ? sunIcon : moonIcon}
              alt={isDarkMode ? "Moon Icon" : "Sun Icon"}
            />
          </button> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
