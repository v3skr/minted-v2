import React from "react";
import "./CustomerPage.scss";

const CookCard = () => {
  return (
    <div className="cookcard">
      <main>
        <div className="overlay"></div>
        <h3>view</h3>
        <img
          src="https://cdn.pixabay.com/photo/2021/06/27/14/32/raspberry-6368999__340.png"
          alt=""
        />
      </main>
      <footer>
        <div className="left">
          <h5>Cook's name</h5>
          <h6>2 miles away</h6>
        </div>
        <div className="right">
          <h5>⭐⭐⭐⭐</h5>
        </div>
      </footer>
    </div>
  );
};

export default CookCard;
