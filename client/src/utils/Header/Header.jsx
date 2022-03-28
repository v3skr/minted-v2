import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1 onClick={() => navigate("/")}>Minted</h1>
      <ul className="links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <a href="">Sign Up</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
