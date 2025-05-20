import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({
  title = "TextUtils",  // default value for title
  about = "About us",   // default value for about
  mode,
  toggleMode,
  changeBackground,
}) {
  const textColor = mode === "light" ? "text-dark" : "text-white";

  return (
    <nav className={`navbar navbar-expand-lg bg-${mode} navbar-dark`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${textColor}`} to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active ${textColor}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${textColor}`} to="/about">
                {about}
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-light ms-3" onClick={() => changeBackground(`${'dark' ? 'light' : 'dark'}`)}>Light</button>
        <button className="btn btn-dark ms-3" onClick={() => changeBackground('dark')}>Dark</button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  changeBackground: PropTypes.func.isRequired,
};
