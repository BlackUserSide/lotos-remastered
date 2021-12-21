import React, { useCallback, useEffect, useState } from "react";
import { IOrderCartMain } from "../type";
import deleteICO from "../../../img/iconCart/delete.png";
import left from "../../../img/prodIcon/left.png";
import right from "../../../img/prodIcon/right.png";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  changeAmounCart,
  deleteCartProduct,
} from "../../../redux/Cart/actionsCart";
import { TDataCart } from "../ContextOrder/ContextOrder";

type TProps = {
  content: IOrderCartMain;

  dataCart: any;
};

export const ItemCartMain: React.FC<TProps> = ({ content }) => {
  const history = useHistory();
  const [dataCartIn, setDataCartIn] = useState<TDataCart>({
    id: 0,
    amount: 0,
    sale: false,
  });
  const [sale, setSale] = useState<boolean>(false);
  const dispatch = useDispatch();
  const updateCart = useCallback(() => {
    const data = localStorage.getItem("cart");
    if (data !== null) {
      let parse: TDataCart[] = JSON.parse(data);
      let findElement = parse.find((e) => e.id === content.id);
      if (findElement) {
        if (findElement.sale === true) {
          setSale(true);
        }
        setDataCartIn(findElement);
      }
    }
  }, [content.id]);
  console.log(sale);

  useEffect(() => {
    updateCart();
  }, [updateCart]);
  const changeHandler = (amount: number) => {
    if (amount <= 0) {
      dispatch(changeAmounCart(content.id, 1));
      updateCart();
      return;
    }
    dispatch(changeAmounCart(content.id, amount));
    updateCart();
  };
  return (
    <div className="main-cart-item">
      <div className="container-item-wrapper">
        <div className="image-wrapper">
          <img src={`http://91.228.155.147/img/${content.src}`} alt="" />
        </div>
        <div
          className="name-wrapper"
          onClick={() => history.push(`/card-product/${content.id}`)}
        >
          <p>{content.name}</p>
          <span>{content.id}</span>
        </div>
        <div className="amount-wrapper-basic">
          <img
            src={left}
            onClick={() => {
              changeHandler(dataCartIn.amount - 1);
            }}
            className="left-ico"
            alt=""
          />
          <input type="text" value={dataCartIn.amount} disabled={true} />

          <img
            src={right}
            onClick={() => {
              changeHandler(dataCartIn.amount + 1);
            }}
            className="right-ico"
            alt=""
          />
        </div>
        <div className="price-wrapper">
          {content.discount !== null ? (
            <div className="discount-wrapper-price">
              <div className="full-price-wrapper-discount">
                <p>{content.price * dataCartIn.amount} грн</p>
              </div>
              <div className="discount-price-wrapper">
                <p>{content.discount * dataCartIn.amount} грн</p>
              </div>
            </div>
          ) : (
            <div className="full-price-wrapper">
              <p>{content.price * dataCartIn.amount} грн</p>
            </div>
          )}
        </div>
        <div
          className="delete-btn-wrapper"
          onClick={() => dispatch(deleteCartProduct(content.id))}
        >
          <img src={deleteICO} alt="" />
        </div>
      </div>
    </div>
  );
};
