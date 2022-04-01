import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import "../../utils/master.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={`header ${true ? "dark" : "light"}`}>
      <h1 onClick={() => navigate("/")}>Minted</h1>
      <ul className="links">
        <li>
          <Link to="/login" className={`${true ? "btndark" : "btnlight"}`}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className={`${true ? "btndark" : "btnlight"}`}>
            Sign Up
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
