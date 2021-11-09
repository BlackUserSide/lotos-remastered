import React, { useState } from "react";
import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
import imgs from "../../img/textProd.png";
import left from "../../img/prodIcon/left.png";
import right from "../../img/prodIcon/right.png";
import cart from "../../img/prodIcon/cart.png";
import bonus from "../../img/prodIcon/bonus.png";
import discountIco from "../../img/prodIcon/discount.png";
import "./card.sass";
import { InstuctionsProduct } from "./InstuctionsProduct/InstuctionsProduct";
import { MainCardContent } from "./MainCardContent/MainCardContent";
import { ReviewCollection } from "./ReviewCollection/ReviewCollection";
import { AuthSection } from "../MainPage/AuthSection/AuthSection";
export const CardProduct: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const changeHandler = (val: number) => {
    if (val <= 0) {
      setAmount(1);
      return;
    }
    setAmount(val);
  };
  return (
    <>
      <Header />
      <div className="card-product">
        <MainCardContent />
        <InstuctionsProduct />
        <ReviewCollection />
        <div className="container-wrapper-new">
          <div className="top-line-wrapper-new">
            <h3 className="h3">Вам також може сподобатись:</h3>
          </div>
          <div className="container-item">
            <div className="item-product-wrapper">
              <div className="image-wrapper">
                <img src={imgs} alt="" />
              </div>
              <div className="text-composition">
                <h3 className="h3">Назва препарату</h3>
                <p className="desc-wrapper">Короткий опис даного препарату</p>
                <div className="discount-wrapper">
                  <span className="full-price">950 грн </span>
                  <span className="discount-price">890 грн</span>
                </div>
                <div className="price-for-user">
                  <p>Ціна для учасників програми 800 грн.</p>
                </div>
                <div className="amount-wrapper">
                  <img
                    src={left}
                    onClick={() => {
                      changeHandler(amount - 1);
                    }}
                    className="left-ico"
                    alt=""
                  />
                  <input type="text" value={amount} disabled={true} />
                  <img
                    src={right}
                    onClick={() => {
                      changeHandler(amount + 1);
                    }}
                    className="right-ico"
                    alt=""
                  />
                </div>
                <div className="btn-wrapper-item-product">
                  <div className="btn-add-to-cart">
                    <span>
                      <img src={cart} alt="" /> У кошик
                    </span>
                  </div>
                  <div className="btn-bay-on-click">
                    <span>Купити в 1 клік </span>
                  </div>
                  <div className="list-info-prod">
                    <div className="bonus-ico-wrapper">
                      <img src={bonus} alt="" />
                      <div className="hidden-wrapper">
                        <p>Даний препарат можна придбати за бонуси.</p>
                      </div>
                    </div>
                    <div className="discount-wrapper">
                      <img src={discountIco} alt="" />
                      <div className="hidden-wrapper">
                        <p>На даний препарат діє акція.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthSection />
      <Footer />
    </>
  );
};
