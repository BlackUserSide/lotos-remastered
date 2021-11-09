import React from "react";
import "./shopwrapper.sass";
import search from "../../../img/iconHeader/search.png";
import { DataItemShop } from "../DataItemShop/DataItemShop";
export const ShopWrapper: React.FC = () => {
  return (
    <div className="shop-wrapper">
      <div className="container-wrapper-shop">
        <div className="main-item-wrapper-shop">
          <div className="container-filter">
            <div className="filter-wrapper">
              <div className="main-fillter">
                <p>
                  Сортування: <span>за замовчуванням</span>{" "}
                </p>
                <div className="hidden-wrapper">
                  <span>За замовчуванням</span>
                  <span>За популярністю</span>
                  <span>За збільшенням ціни</span>
                  <span>За зменшенням ціни</span>
                </div>
              </div>
            </div>
          </div>
          <div className="search-wrapper">
            <div className="input-wrapper">
              <input type="text" name="search-shop" />
              <img src={search} alt="" />
            </div>
          </div>
        </div>
        <DataItemShop />
      </div>
    </div>
  );
};
