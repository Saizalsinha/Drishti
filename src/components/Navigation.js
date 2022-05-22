import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <header className="nav">
      <Link to="/">
        <img
          className="logo"
          alt="logo"
          src="https://i.ibb.co/XYTqVP8/DRISHTI-Logo.png"
        />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/Virtual-eye">Virtual Eye</Link>
          </li>
          <li>
            <Link to="/">Maps</Link>
          </li>
          <li>
            <Link to="/">Eye Care</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;

