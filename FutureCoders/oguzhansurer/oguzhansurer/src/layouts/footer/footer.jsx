import Logo from "../../img/FutureCoders Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-justify">
        <div className="footer-top">
          <div className="footer-top-logo">
            <h2>Future Coders</h2>
            <img src={Logo} alt="" />
            <h4>+90(555) 555 55 55</h4>
            <h4>support@test.com </h4>
          </div>
          <div className="footer-top-links">
            <h2>Useful Links</h2>
            <Link to="/login-page">Login</Link>
            <Link to="/sign-page">Sign Up</Link>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
          </div>
          <div className="footer-top-about">
            <h2>About Us</h2>
            <Link to="/login-page">Login</Link>
            <a href="#overlay">Start of Main page</a>
            <a href="#popular-courses">Popular Courses</a>
            <a href="#new-courses">New Courses</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-copyRight">
            @2024 Future Coders , Design & Developed by Ouz
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
