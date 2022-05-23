import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <header className="nav">
      <Link to="/">
        <img
          className="logo"
          alt="logo"
          src="https://i.ibb.co/5G7ZRqg/Logo-cropped.png"
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


// Full Logo link
// <img
//           className="logo"
//           alt="logo"
//           src="https://i.ibb.co/XYTqVP8/DRISHTI-Logo.png"
//         />

// Cropped logo link
// <a href="https://ibb.co/xX4Z7Vt"><img src="https://i.ibb.co/5G7ZRqg/Logo-cropped.png" alt="Logo-cropped" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>rob zombie cd review</a><br />