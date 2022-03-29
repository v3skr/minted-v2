import React from "react";
import CookGrid from "./CookGrid";
import "./CustomerPage.scss";

const CustomerPage = () => {
  return (
    <div className="customerpage">
      <div className="upper">
        <h1 className="title">Cooks In Your Area</h1>
        <input type="text" placeholder="Search Cook" />
      </div>
      <CookGrid />
    </div>
  );
};

export default CustomerPage;
