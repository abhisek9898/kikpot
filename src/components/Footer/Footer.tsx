import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="footer-logo" />
          <p>Thank You</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>1234567890</li>
            <li>kikpot@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2024 Copyright:</p>
    </div>
  );
};

export default Footer;
