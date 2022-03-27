import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>Minted</h1>
      <ul className="links">
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Sign Up</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
