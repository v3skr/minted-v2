import React from "react";
import CookGrid from "./CookGrid";
import "./CustomerPage.scss";
import "../../utils/master.scss";

const CustomerPage = () => {
  return (
    <div className="customerpage">
      <div className="upper">
        <h1 className={`title ${true ? "lighttext" : "datrktext"}`}>
          Cooks In Your Area
        </h1>
        <input
          type="text"
          placeholder="Search Cook"
          className={true ? "dark shadow7 lighttext" : "light shadow5 darktext"}
        />
      </div>
      <CookGrid />
    </div>
  );
};

export default CustomerPage;
