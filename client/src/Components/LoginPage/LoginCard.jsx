import React from "react";
import "./LoginPage.scss";
import "../../utils/master.scss";
import { Link } from "react-router-dom";

const LoginCard = () => {
  return (
    <div className={`logincard ${true ? "dark" : "light"}`}>
      <header className={`${true ? "dark borderdark2" : "light borderlight2"}`}>
        <h2>Login</h2>
      </header>
      <main className={`${true ? "dark" : "light"}`}>
        <input
          type="email"
          placeholder="Email"
          className={`${true ? "dark shadow7" : "light"}`}
        />
        <input
          type="password"
          placeholder="Password"
          className={`${true ? "dark shadow7" : "light"}`}
        />
        <Link
          to="/reset-password"
          className={`${true ? "lighttext" : "textdark"}`}
        >
          Forgot Password ?
        </Link>
      </main>
      <footer>
        <button className={`btn1  ${true ? "btndark" : " btnlight"}`}>
          Login
        </button>
      </footer>
    </div>
  );
};

export default LoginCard;
