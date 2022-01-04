import React, { useState } from "react";
import { IDataProd } from "../type";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import left from "../../../img/prodIcon/left.png";
import right from "../../../img/prodIcon/right.png";
import cart from "../../../img/prodIcon/cart.png";
import bonus from "../../../img/prodIcon/bonus.png";
import discountIco from "../../../img/prodIcon/discount.png";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addSaleProdItem, addToCart } from "../../../redux/Cart/actionsCart";
import { PopUpAddToCart } from "../../ui/PopUpAddToCart/PopUpAddToCart";
import { RootState } from "../../../redux/rootReducer";

type TProps = {
  content: IDataProd;
};
export const ItemShop: React.FC<TProps> = ({ content }) => {
  const history = useHistory();
  const [amount, setAmount] = useState<number>(1);
  const dispathc = useDispatch();
  const prodSale = useSelector((state: RootState) => state.cart.prodSaleSum);
  const activeProd = useSelector((state: RootState) => state.cart.activeSale);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const changeHandler = (val: number) => {
    if (val <= 0) {
      setAmount(1);
      return;
    }
    setAmount(val);
  };

  const addToCartHandler = () => {
    setShowPopUp(true);
    if (prodSale && !activeProd) {
      dispathc(addSaleProdItem(content.id));
      return;
    }
    dispathc(addToCart(content.id, amount));
    return;
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
            <LazyLoadImage
              src={`http://91.228.155.147/img/${content.src}`}
              effect="blur"
              alt=""
            />
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
                    {prodSale !== 0 && !activeProd
                      ? prodSale >= content.discount
                        ? 1
                        : (content.discount * amount - prodSale).toFixed(3)
                      : (content.discount * amount).toFixed(3)}
                    {(content.discount * amount).toFixed(3)} грн
                  </span>
                </>
              ) : (
                <span className="full-price-wrapper-not-discount">
                  {prodSale !== 0 && !activeProd
                    ? prodSale >= content.price
                      ? 1
                      : (content.price * amount - prodSale).toFixed(3)
                    : (content.price * amount).toFixed(3)}
                  {} грн
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
          {activeProd || prodSale === 0 ? (
            <>
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
            </>
          ) : (
            ""
          )}
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
