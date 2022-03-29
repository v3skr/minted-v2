import React from "react";
import "./FeedbackCard.scss";
import "../../utils/master.scss";

const FeedbackCard = ({ user, userPic, ratings }) => {
  return (
    <div className="feedbackcard light">
      <header className="borderlight">
        <div className="left">
          <img src={userPic} alt=""  />
          <h3>{user}</h3>
        </div>
        <h2>{ratings}</h2>
      </header>
      <main>
        <h2 className="title">" Best Service Ever "</h2>
      </main>
    </div>
  );
};

export default FeedbackCard;
