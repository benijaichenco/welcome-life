import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left eng-title">Welcome Life</div>
      <div className="navbar-right heb-title">
        <NavLink to="/" className="navbar-link heb-text">
          דף הבית
        </NavLink>
        <NavLink to="/gallery" className="navbar-link heb-text">
          גלריה
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
