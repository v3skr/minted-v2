import React from "react";
import "./LoginPage.scss";
import "../../utils/master.scss";

const LoginCard = () => {
  return (
    <div className="logincard">
      <header>
        <h2>Login</h2>
      </header>
      <main>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {/* <i className="fas fa-eye"></i> */}
        <a href="">Forgot Password ?</a>
      </main>
      <footer>
        <button className="btn1 colourpink">Login</button>
      </footer>
    </div>
  );
};

export default LoginCard;
