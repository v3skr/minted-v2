import React from "react";
import ImgGrid from "./ImgGrid";
import Feedback from "./Feedback";
import HomePageUpper from "./HomePageUpper";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <HomePageUpper />
      <div className="main">
        <h3 className={`${true ? "lighttext" : "darktext"} sub-title `}>
          Some Examples
        </h3>
        <ImgGrid />
        <h3 className={`${true ? "lighttext" : "darktext"} sub-title `}>
          User Feedback and Reviews
        </h3>
        <Feedback />
      </div>
    </div>
  );
};

export default HomePage;
