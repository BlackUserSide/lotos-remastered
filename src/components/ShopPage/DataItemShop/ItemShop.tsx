import React, { useContext, useState } from "react";
import { IDataProd } from "../type";

import left from "../../../img/prodIcon/left.png";
import right from "../../../img/prodIcon/right.png";
import cart from "../../../img/prodIcon/cart.png";
import bonus from "../../../img/prodIcon/bonus.png";
import discountIco from "../../../img/prodIcon/discount.png";
import { CartContext } from "../../CartContext/CartContext";
import { useHistory } from "react-router";
type TProps = {
  content: IDataProd;
};
export const ItemShop: React.FC<TProps> = ({ content }) => {
  const history = useHistory();
  const [amount, setAmount] = useState<number>(1);
  const changeHandler = (val: number) => {
    if (val <= 0) {
      setAmount(1);
      return;
    }
    setAmount(val);
  };
  const { addCart } = useContext(CartContext);
  const addToCartHandler = () => {
    if (addCart) {
      addCart(content.id, amount);
      return;
    }
  };

  return (
    <div
      className="item-product-wrapper"
      onClick={() => {
        history.push(`/card-product/${content.id}`);
      }}
    >
      <div className="image-wrapper">
        <img src={`http://91.228.155.147/img/${content.src}`} alt="" />
      </div>
      <div className="text-composition">
        <h3 className="h3">{content.name}</h3>
        <p className="desc-wrapper">{content.desc}</p>
        <div className="discount-wrapper">
          {content.discount !== null ? (
            <>
              <span className="full-price">{content.price} грн</span>
              <span className="discount-price">{content.discount} грн</span>
            </>
          ) : (
            <span className="full-price-wrapper-not-discount">
              {content.price} грн{" "}
            </span>
          )}
        </div>
        {content.priceForUser ? (
          <div className="price-for-user">
            <p>Ціна для учасників програми {content.priceForUser} грн.</p>
          </div>
        ) : (
          ""
        )}
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
          <div className="btn-add-to-cart" onClick={addToCartHandler}>
            <span>
              <img src={cart} alt="" /> У кошик
            </span>
          </div>
          {localStorage.getItem("token") !== null ? (
            <div className="btn-bay-on-click">
              <span>Купити в 1 клік </span>
            </div>
          ) : (
            ""
          )}

          <div className="list-info-prod">
            <div className="bonus-ico-wrapper">
              <img src={bonus} alt="" />
              <div className="hidden-wrapper">
                <p>Даний препарат можна придбати за бонуси.</p>
              </div>
            </div>
            {content.discount !== 0 ? (
              <div className="discount-wrapper">
                <img src={discountIco} alt="" />
                <div className="hidden-wrapper">
                  <p>На даний препарат діє акція.</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
