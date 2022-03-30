import React from "react";
import "./CookPage.scss";
import MenuCard from "./MenuCard";
import "../../utils/master.scss";

const CookPage = () => {
  return (
    <div className="max-con">
      <div className="cookpage">
        <header className="light">
          <div className="info">
            <h2 className="title">Hesam's Minted</h2>
            <ul>
              <li>
                <h3>
                  Status : Active {""}
                  {/* <i className="far fa-check-circle active-icon"></i> */}
                  <i class="far fa-times-circle inactive-icon"></i>
                </h3>
              </li>
              <li>
                <h3>
                  <i className="fas fa-star star-icon"></i>
                  <i className="fas fa-star star-icon"></i>
                  <i className="fas fa-star star-icon"></i>
                  <i className="fas fa-star star-icon"></i>
                  <i className="fas fa-star star-icon"></i> (1029+)
                </h3>
              </li>
              <li>
                <h3>4.2 miles</h3>
              </li>
              <li>
                <h3>15-30 mins</h3>
              </li>
              <li>
                <h3>Minimum delivery : £5.00</h3>
              </li>
              <li>
                <h3>Delivery and Collection </h3>
              </li>
            </ul>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__480.jpg"
            alt=""
          />
        </header>
        <h1 className="title">Our Menu</h1>
        <main className="menu-grid">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </main>
      </div>
    </div>
  );
};

export default CookPage;
