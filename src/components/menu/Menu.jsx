import { Link } from "react-router-dom";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <Link className="link" to="/">
          {" "}
          <li onClick={() => setMenuOpen(false)}>Home</li>
        </Link>
        <Link className="link" to="/team">
          {" "}
          <li onClick={() => setMenuOpen(false)}>Team</li>
        </Link>
        <Link className="link" to="/about">
          {" "}
          <li onClick={() => setMenuOpen(false)}>About Us</li>
        </Link>
        <Link className="link" to="/contact">
          {" "}
          <li onClick={() => setMenuOpen(false)}>Contact Us</li>
        </Link>
        <Link className="link" to="/login">
          {" "}
          <li onClick={() => setMenuOpen(false)}>Login</li>
        </Link>
      </ul>
    </div>
  );
}
