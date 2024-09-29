import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>KIKPOT</h2>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Header;
