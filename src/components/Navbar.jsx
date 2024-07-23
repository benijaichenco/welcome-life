import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        toggleNav();
      }
    };

    // Add the scroll event listener when the component mounts
    document.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]); // Add isOpen to the dependency array to capture its latest value

  return (
    <>
      <div className={`navbar-links-container ${isOpen ? "active" : ""}`}>
        <NavLink to="/" end className="navbar-link heb-text" onClick={toggleNav}>
          דף הבית
        </NavLink>
        <NavLink to="/gallery" className="navbar-link heb-text" onClick={toggleNav}>
          גלריה
        </NavLink>
      </div>
      <header className="navbar">
        <div className="navbar-left eng-title">Welcome Life</div>
        <div className="navbar-right">
          <div className="hamburger-btn-container" onClick={toggleNav}>
            <div className={`hamburger-middle-line ${isOpen ? "active" : ""}`}></div>
            <div className={`hamburger-btn ${isOpen ? "active" : ""}`}></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
