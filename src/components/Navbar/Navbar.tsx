import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";

interface NavbarProps {
  onSignInClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSignInClick }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/">Home</Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <button onClick={onSignInClick}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
