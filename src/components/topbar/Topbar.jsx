import "./topbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authApiCalls";
import { clearInfluencers } from "../../redux/influencerRedux";
import { clearModels } from "../../redux/modelRedux";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(logout);
    localStorage.removeItem("persist:root");
    navigate("/");

    // dispatch(clearInfluencers);
    // dispatch(clearModels);
  };

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            NFI
          </a>
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
            {user == null ? (
              <li className="menuItemLinks">
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
            ) : (
              <li className="menuItemLinks" onClick={handleLogout}>
                <Link className="link" to="/login">
                  Logout
                </Link>
              </li>
            )}
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
