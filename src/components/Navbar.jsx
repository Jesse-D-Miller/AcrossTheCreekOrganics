import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="desktop-logo">
          <Link to="/">
            <img
              src="/images/accrossthecreek_logo.png"
              alt="Across The Creek Organics Logo"
              className="atco-logo-desktop"
            />
          </Link>
        </div>

        <div>
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
                <Link to="/about">Our Farm</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/order">Selected Items</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
