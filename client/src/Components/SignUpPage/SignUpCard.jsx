import React from "react";

const SignUpCard = () => {
  return (
    <div className="signupcard">
      <header>
        <h2>Sign Up</h2>
      </header>
      <main>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Surname" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Address" />
      </main>
      <footer>
        <button className="btn1 colouryellow">Sign Up</button>
      </footer>
    </div>
  );
};

export default SignUpCard;
