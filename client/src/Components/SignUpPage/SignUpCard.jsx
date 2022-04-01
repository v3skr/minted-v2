import React from "react";
import "../../utils/master.scss";
const SignUpCard = () => {
  return (
    <div className={`signupcard ${true ? "dark" : "light"}`}>
      <header className={true ? "borderdark2" : "borderlight2"}>
        <h2>Sign Up</h2>
      </header>
      <main className={`${true ? "dark" : "light"}`}>
        <input
          type="text"
          className={`${true ? "dark shadow7" : "light shadow5"}`}
          placeholder="First Name"
        />
        <input
          type="text"
          className={`${true ? "dark shadow7" : "light shadow5"}`}
          placeholder="Surname"
        />
        <input
          type="text"
          className={`${true ? "dark shadow7" : "light shadow5"}`}
          placeholder="Email"
        />
        <input
          type="text"
          className={`${true ? "dark shadow7" : "light shadow5"}`}
          placeholder="Username"
        />
        <input
          type="text"
          className={`${true ? "dark shadow7" : "light shadow5"}`}
          placeholder="Password"
        />
        <input
          type="text"
          className={`${true ? "dark shadow7" : "light shadow5"}`}
          placeholder="Confirm Password"
        />
        <input
          type="text"
          className={`${true ? "dark shadow7" : "light shadow5"}`}
          placeholder="Phone Number"
        />
        <input
          type="text"
          className={`${true ? "dark shadow7" : "light shadow5"}`}
          placeholder="Post Code"
        />
      </main>
      <footer>
        <button className={`btn1  ${true ? "btndark" : " btnlight"}`}>
          Sign Up
        </button>
      </footer>
    </div>
  );
};

export default SignUpCard;
