import React from "react";
import "./FeedbackCard.scss";
import "../../utils/master.scss";

const FeedbackCard = ({ user, userPic, ratings }) => {
  return (
    <div className={`feedbackcard ${true ? "dark" : "light"}`}>
      <header className={`${true ? "borderdark" : "borderlight"}`}>
        <div className="left">
          <img
            src={userPic}
            alt=""
            className={`${true ? "borderdark3" : "borderlight3"}`}
          />
          <h3 className={`${true ? "lighttext" : "darktext"}`}>{user}</h3>
        </div>
        <h2>{ratings}</h2>
      </header>
      <main>
        <h2 className={`${true ? "lighttext" : "darktext"} `}>
          " Best Service Ever "
        </h2>
      </main>
    </div>
  );
};

export default FeedbackCard;
