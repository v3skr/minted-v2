import React from "react";
import "./ResetPasswordPage.scss";
import "../../utils/master.scss";

const ResetPasswordPage = () => {
  return (
    <div className="reset-password flex-center-row">
      <div
        className={`reset-card flex-center-column ${true ? "dark" : "dark"}`}
      >
        <header className={true ? "borderdark2" : "borderlight2"}>
          <h2 className="">Reset Password</h2>
        </header>
        <main>
          <input
            type="text"
            placeholder="Email"
            className={true ? "dark shadow7" : "light shadow5"}
          />
        </main>
        <footer>
          <button className={`btn1  ${true ? "btndark" : " btnlight"}`}>
            Reset
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
