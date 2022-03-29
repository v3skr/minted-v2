import React from "react";
import "./HomePage.scss";
import "../../utils/master.scss";

const HomePageUpper = () => {
  return (
    <div>
      <h1 className="title">Welcome To Minted</h1>
      <div className="text-con light">
        <header>
          <h3 className="borderlight2">What is Minted</h3>
          <p>
            Minted is a food platform that offers flexibility, relaiability and
            consitancy. Home made food, desserts, drinks etc deliverd to your
            home with all convinance. In addition to finding your favourite
            meals here , you can also get creative with your own skills and sell
            your own food.
          </p>
        </header>
      </div>
    </div>
  );
};

export default HomePageUpper;
