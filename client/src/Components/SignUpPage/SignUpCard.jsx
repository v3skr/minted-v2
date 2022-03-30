import React from "react";

const SignUpCard = () => {
  return (
    <div className="signupcard light">
      <header className="borderlight2">
        <h2>Sign Up</h2>
      </header>
      <main className="light">
        <input type="text" className="light" placeholder="First Name" />
        <input type="text" className="light" placeholder="Surname" />
        <input type="text" className="light" placeholder="Email" />
        <input type="text" className="light" placeholder="Username" />
        <input type="text" className="light" placeholder="Password" />
        <input type="text" className="light" placeholder="Confirm Password" />
        <input type="text" className="light" placeholder="Phone Number" />
        <input type="text" className="light" placeholder="Address" />
      </main>
      <footer>
        <button className="btn1 btnlight">Sign Up</button>
      </footer>
    </div>
  );
};

export default SignUpCard;
