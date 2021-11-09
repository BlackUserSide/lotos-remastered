import React, { useState } from "react";
import mainImage from "../../../img/testProd.png";
import right from "../../../img/prodIcon/right.png";
import left from "../../../img/prodIcon/left.png";
import { Link } from "react-router-dom";
export const MainCardContent: React.FC = () => {
  const [amoun, setAmount] = useState<number>(1);
  const changeAmount = (newAmount: number) => {
    if (newAmount <= 0) {
      setAmount(1);
      return;
    }

    setAmount(newAmount);
  };
  return (
    <div className="main-card-content">
      <div className="main-container-card">
        <div className="image-wrapper-card">
          <div className="main-image-container">
            <img src={mainImage} alt="" />
          </div>
          <div className="collection-wrapper-image">
            <img src={mainImage} alt="" />
          </div>
        </div>
        <div className="text-collection-card">
          <div className="id-product-wrapper">
            <p>42806</p>
          </div>
          <div className="name-product">
            <h2 className="h2">Назва препарату</h2>
          </div>
          <div className="desc-product">
            <p>
              Короткий опис даного препаратуКороткий опис даного
              препаратуКороткий опис даного препарату
            </p>
          </div>
          <div className="star-wrapper">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                fill="#E0E0E0"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                fill="#E0E0E0"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                fill="#E0E0E0"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                fill="#E0E0E0"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                fill="#E0E0E0"
              />
            </svg>
          </div>
          <div className="price-wrapper">
            <div className="discount-wrapper">
              <div className="full-price">
                <p>950 грн</p>
              </div>
              <div className="discount-price">
                <p>890 грн</p>
              </div>
            </div>
          </div>
          <div className="amount-wrapper">
            <img
              src={left}
              onClick={() => {
                changeAmount(amoun - 1);
              }}
              className="left-ico"
              alt=""
            />
            <input type="text" value={amoun} disabled={true} />
            <img
              src={right}
              onClick={() => {
                changeAmount(amoun + 1);
              }}
              className="right-ico"
              alt=""
            />
          </div>
          <div className="btn-wrapper-card">
            <div className="btn-main-bay-in-click">
              <span>Купити в 1 клік </span>
            </div>
            <div className="btn-main-wrapper-add-to-cart">
              <span>Додати у кошик</span>
            </div>
          </div>
          <div className="price-for-user">
            <p>Ціна за одиницю для учасників програми 800 грн.</p>
            <Link to="/login">Стати учасником</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
