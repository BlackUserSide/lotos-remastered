import React from "react";
import "./actual.sass";
import photo1 from "../../../img/actual/prod1.png";
import photo2 from "../../../img/actual/prod2.png";
import photo3 from "../../../img/actual/prod3.png";
export const ActualProducts: React.FC = () => {
  return (
    <div className="actual-products">
      <div className="top-line">
        <h2 className="h2">Актуальні пропозиції</h2>
      </div>
      <div className="actual-container-product">
        <div className="main-wrapper-actual">
          <div className="actual-item-main">
            <div className="image-wrapper">
              <img src={photo1} alt="" />
            </div>
            <div className="container-text-wrapper">
              <h4 className="h4">Пропозиція щодо товарів</h4>
              <p className="desc-product">
                Тут можливий опис та деталі даної пропозиції, у декілька рядків.
                Тут можливий опис та деталі даної пропозиції, у декілька рядків.
              </p>
              <div className="btn-main-collection light-btn">
                <span>Перейти до товару</span>
              </div>
            </div>
          </div>
        </div>
        <div className="actual-second-product">
          <div className="item-second-product">
            <div className="image-wrapper">
              <img src={photo2} alt="" />
            </div>
            <div className="container-text-wrapper">
              <h4 className="h4">Пропозиція щодо товарів</h4>
              <p className="desc-product">
                Тут можливий опис та деталі даної пропозиції, у декілька рядків.
                Тут можливий опис та деталі даної пропозиції, у декілька рядків.
              </p>
              <div className="btn-main-collection light-btn">
                <span>Перейти до товару</span>
              </div>
            </div>
          </div>
          <div className="item-second-product">
            <div className="image-wrapper">
              <img src={photo3} alt="" />
            </div>
            <div className="container-text-wrapper">
              <h4 className="h4">Пропозиція щодо товарів</h4>
              <p className="desc-product">
                Тут можливий опис та деталі даної пропозиції, у декілька рядків.
                Тут можливий опис та деталі даної пропозиції, у декілька рядків.
              </p>
              <div className="btn-main-collection light-btn">
                <span>Перейти до товару</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
