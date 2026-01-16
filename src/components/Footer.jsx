import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <img
          src="/images/accrossthecreek_logo.png"
          alt="Across The Creek Organics Logo"
          className="atco-logo"
        />
        <div className="footer-text">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Across+The+Creek+Organics,+Pemberton+BC"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <p>Across The Creek Organics</p>
            <p>8324 Pemberton Meadows Rd,</p>
            <p>Pemberton BC</p>
          </a>
          <p>
            <a href="tel:604-698-8137" style={{ color: "inherit" }}>
              604-698-8137
            </a>
          </p>
          <p>
            <a
              href="mailto:acrossthecreek@gmail.com"
              style={{ color: "inherit" }}
            >
              acrossthecreek@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
