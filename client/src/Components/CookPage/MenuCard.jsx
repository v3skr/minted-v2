import React from "react";
import "../../utils/master.scss";
import "./CookPage.scss";

const MenuCard = () => {
  return (
    <div className={`menu-card ${true ? "dark" : "light"}`}>
      <header className={true ? "borderdark2" : "borderlight2"}>
        <h3>name</h3>
        <h4>£10.00</h4>
      </header>
      <main>
        <div className="overlay"></div>
        <h3>Add To Cart</h3>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam
          eveniet tempora, id itaque enim architecto quo fuga maiores reiciendis
          repellat, similique dolores placeat! Amet.
          <br />
          <i className="fas fa-star star-icon"></i>
          <i className="fas fa-star star-icon"></i>
          <i className="fas fa-star star-icon"></i>
          <i className="fas fa-star star-icon"></i>
          <i className="fas fa-star star-icon"></i>
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2017/11/04/19/05/christmas-2918569__480.jpg"
          alt=""
        />
      </main>
    </div>
  );
};

export default MenuCard;
