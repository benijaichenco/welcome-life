import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-left eng-title">Welcome Life</div>
      <div className="navbar-right heb-title">
        <div className={`navbar-links-container ${isOpen ? "open" : ""}`}>
          <NavLink to="/welcome-life" className="navbar-link heb-text" onClick={toggleNav}>
            דף הבית
          </NavLink>
          <NavLink to="/welcome-life/gallery" className="navbar-link heb-text" onClick={toggleNav}>
            גלריה
          </NavLink>
        </div>
        <div className="hamburger-btn-container" onClick={toggleNav}>
          <div className={`hamburger-middle-line ${isOpen ? "active" : ""}`}></div>
          <div className={`hamburger-btn ${isOpen ? "active" : ""}`}></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
