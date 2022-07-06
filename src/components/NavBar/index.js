import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "rgba(155, 81, 224, 1)" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <div className="home__hero-img-wrapper">
                <img
                  src={"images/logo.svg"}
                  alt={"logo"}
                  className="home__hero-img navbar-icon"
                />
              </div>
              {/* <MdFingerprint className="navbar-icon" /> */}
              whichride
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  The app
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/aboutus"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/getintouch"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
