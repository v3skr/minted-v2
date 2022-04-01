import React from "react";
import "./Footer.scss";
import "../../utils/master.scss";

const Footer = () => {
  return (
    <div className={`footer ${true ? "dark" : "light"}`}>
      <h3>CopyRight Reserved</h3>
      <ul>
        <li>
          <h5>minted@gmail.com</h5>
        </li>
        <li>
          <h5>12345678900</h5>
        </li>
        <li>
          <a href="" className={`${true ? "lighttext" : "textdark"}`}>
            Feedback
          </a>
        </li>
        <li>
          <a href="" className={`${true ? "lighttext" : "textdark"}`}>
            Have a suggestion?
          </a>
        </li>
        <li>
          <a href="" className={`${true ? "lighttext" : "textdark"}`}>
            Spotted a bug
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
