import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
      <img src="src/assets/images/accrossthecreek_logo.png" alt="Across The Creek Organics Logo" className="atco-logo" />
      </Link>
      <h1>Across The Creek Organics</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Form</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;