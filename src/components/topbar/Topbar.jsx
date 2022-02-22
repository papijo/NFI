import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            NFI
          </a>
          {/* <div className="itemContainer">
            <Person className="icon" />
            <span>+44 924 12 74</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>safak@genius.com</span>
          </div> */}
        </div>
        <div className="menuRight">
          <ul className="menuLinks">
            <li className="menuItemLinks">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="menuItemLinks">
              <Link className="link" to="/team">
                Team
              </Link>
            </li>
            <li className="menuItemLinks">
              <Link className="link" to="/about">
                About Us
              </Link>
            </li>
            <li className="menuItemLinks">
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="menuItemLinks">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
