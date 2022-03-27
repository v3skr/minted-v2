import React from "react";
import "./Image.scss";

const Image = ({ link, name }) => {
  return (
    <div className="img-con">
      <img alt="Food" src={link} className="img"></img>
      <div className="img-text">
        <h3>{name}</h3>
        <h3>⭐⭐⭐⭐⭐</h3>
      </div>
    </div>
  );
};

export default Image;
