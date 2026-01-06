import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-and-title">
          <Link to="/">
            <img
              src="/images/accrossthecreek_logo.png"
              alt="Across The Creek Organics Logo"
              className="atco-logo"
            />
          </Link>
          <h1>Across The Creek Organics</h1>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Form</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
