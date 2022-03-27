import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h3>CopyRight Reserved</h3>
      <ul>
        <li>
          <h5>minted@gmail.com</h5>
        </li>
        <li>
          <h5>12345678900</h5>
        </li>
        <li>
          <a href="">Feedback</a>
        </li>
        <li>
          <a href="">Have a suggestion?</a>
        </li>
        <li>
          <a href="">Spotted a bug</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
