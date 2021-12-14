import React, { useContext, useState } from "react";
import { IDataProd } from "../type";

import left from "../../../img/prodIcon/left.png";
import right from "../../../img/prodIcon/right.png";
import cart from "../../../img/prodIcon/cart.png";
import bonus from "../../../img/prodIcon/bonus.png";
import discountIco from "../../../img/prodIcon/discount.png";
import { CartContext } from "../../CartContext/CartContext";
import { useHistory } from "react-router";
import { PopUpAddToCart } from "../../ui/PopUpAddToCart/PopUpAddToCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/Cart/actionsCart";
type TProps = {
  content: IDataProd;
};
export const ItemShop: React.FC<TProps> = ({ content }) => {
  const history = useHistory();
  const [amount, setAmount] = useState<number>(1);
  const dispathc = useDispatch();
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
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
      setShowPopUp(true);
      addCart(content.id, amount);
      dispathc(addToCart(content.id, amount));
      return;
    }
  };

  return (
    <>
      <div className="item-product-wrapper">
        <div
          className="container-wrapper-link"
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
                  <span className="full-price">
                    {content.price * amount} грн
                  </span>
                  <span className="discount-price">
                    {content.discount * amount} грн
                  </span>
                </>
              ) : (
                <span className="full-price-wrapper-not-discount">
                  {content.price * amount} грн{" "}
                </span>
              )}
            </div>
            {content.priceForUser ? (
              <div className="price-for-user">
                {localStorage.getItem("token") !== null ? (
                  <p>Ціна для учасників програми {content.priceForUser} грн.</p>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
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
          <div className="btn-add-to-cart" onClick={addToCartHandler}>
            <span>
              <img src={cart} alt="" /> У кошик
            </span>
          </div>
          <div className="list-info-prod">
            <div className="bonus-ico-wrapper">
              <img src={bonus} alt="" />
              <div className="hidden-wrapper">
                <p>Даний препарат можна придбати за бонуси.</p>
              </div>
            </div>
            {content.discount !== null ? (
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
      {showPopUp ? (
        <PopUpAddToCart
          content={content}
          amount={amount}
          setShowPopUp={setShowPopUp}
        />
      ) : (
        ""
      )}
    </>
  );
};
