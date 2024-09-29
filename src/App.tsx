import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  const [showLogin, setShowLogin] = React.useState<boolean>(false);
  return (
    <div>
      <Navbar onSignInClick={() => setShowLogin(true)} />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
