import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrollPosition > 50 ? "navBG" : "transparent"
        }`}
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </Link>

          <button
            className={`navbar-toggler  ${isNavOpen ? "collapsed" : ""}`}
            type="button"
            onClick={toggleNav}
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>

          <div
            className={`collapse navbar-collapse justify-content-center ${
              isNavOpen ? "show" : ""
            }`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeNav}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/services" className="nav-link" onClick={closeNav}>
                  Services
                </Link>
                <ul>
                  <li>
                    <Link to="/artificial-intelligence">AI</Link>
                  </li>
                  <li>
                    <Link to="/annotation">Annotation</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/clients" className="nav-link" onClick={closeNav}>
                  Clients
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </Link>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link
                      to="/about"
                      className="dropdown-item"
                      onClick={closeNav}
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/careers"
                      className="dropdown-item"
                      onClick={closeNav}
                    >
                      Careers
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/blogs"
                      className="dropdown-item"
                      onClick={closeNav}
                    >
                      Blogs
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/teams"
                      className="dropdown-item border-0"
                      onClick={closeNav}
                    >
                      Teams
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <Link
              to="/contact"
              className="nav-link btn navbar-cta-btn"
              onClick={closeNav}
            >
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
