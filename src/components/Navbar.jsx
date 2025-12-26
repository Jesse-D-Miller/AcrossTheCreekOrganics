import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="atco-logo">Logo</div>
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