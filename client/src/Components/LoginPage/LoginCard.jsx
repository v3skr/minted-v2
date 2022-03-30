import React from "react";
import "./LoginPage.scss";
import "../../utils/master.scss";

const LoginCard = () => {
  return (
    <div className="logincard light">
      <header className="light borderlight2">
        <h2>Login</h2>
      </header>
      <main className="light">
        <input type="email" placeholder="Email" className="light" />
        <input type="password" placeholder="Password" className="light" />
        <a href="" className="light">
          Forgot Password ?
        </a>
      </main>
      <footer>
        <button className="btn1 btnlight">Login</button>
      </footer>
    </div>
  );
};

export default LoginCard;
