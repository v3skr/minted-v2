import React from "react";
import "./Card.scss";
import "../../utils/master.scss";

const Card = ({ type, info }) => {
  return (
    <div className="card">
      <header>
        <h3>{type}</h3>
      </header>
      <main>
        <ul>
          {info.map((ele) => (
            <li>{ele}</li>
          ))}
        </ul>
      </main>
      <footer>
        <button className="btn1 colour1">Login</button>
        <button className="btn1 colour2">Sign-Up</button>
      </footer>
    </div>
  );
};

export default Card;
