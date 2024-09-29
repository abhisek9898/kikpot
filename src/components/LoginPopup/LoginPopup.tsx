import React from "react";
import PropTypes from "prop-types";
import { assets } from "../../assets/assets";
import "./LoginPopup.css";

interface LoginPopupProps {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ setShowLogin }) => {
  LoginPopup.propTypes = {
    setShowLogin: PropTypes.func.isRequired,
  };

  const [currState, setCurrState] = React.useState("Sign Up");

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && <input type="text" placeholder="Name" />}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>{currState === "Login" ? "Login" : "Create account"}</button>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
