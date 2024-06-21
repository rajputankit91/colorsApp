import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="nav-logo">
            <img
              src="https://pbs.twimg.com/profile_images/1710686397487894528/t7Jd5yJO_400x400.jpg"
              alt="img"
            />
            <h2>
              <Link to="/">Logo</Link>
            </h2>
          </div>
          
          <nav className="nav-link">
            <ul>
              <li>
                <Link to="/Generator">Palettes generator</Link>
              </li>
              <li>
                <Link to="/Explore">Explore Palettes</Link>
              </li>
              <li>
                <Link to="/Perviewer">Palletes Perviewer</Link>
              </li>
            </ul>
          </nav>
          <div className="nav-btn">
            <button>Contact</button>
          </div>
        </div>
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
