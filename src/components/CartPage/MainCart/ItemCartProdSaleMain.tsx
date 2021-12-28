import React, { useCallback, useEffect, useState } from "react";
import { IOrderCartMain } from "../type";
import deleteICO from "../../../img/iconCart/delete.png";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCartProduct } from "../../../redux/Cart/actionsCart";
import { TDataCart } from "../ContextOrder/ContextOrder";

type TProps = {
  content: IOrderCartMain;
};

export const ItemCartProdSaleMain: React.FC<TProps> = ({ content }) => {
  const history = useHistory();
  const [dataCartIn, setDataCartIn] = useState<TDataCart>({
    id: 0,
    amount: 0,
    sale: false,
    prodSale: false,
  });

  const dispatch = useDispatch();
  const updateCart = useCallback(() => {
    const data = localStorage.getItem("cart");
    if (data !== null) {
      let parse: TDataCart[] = JSON.parse(data);
      let findElement = parse.find((e) => {
        if (e.id === content.id && !e.sale && e.prodSale) {
          return e;
        }
        return undefined;
      });
      if (findElement) {
        setDataCartIn(findElement);
      }
    }
  }, [content.id]);

  useEffect(() => {
    updateCart();
  }, [updateCart]);

  return (
    <div className="main-cart-item">
      <div className="sale-wrapper">
        <p>Фірмова акція LOTUS-NAMASTE</p>
      </div>
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
          <input type="text" value={dataCartIn.amount} disabled={true} />
        </div>
        <div className="price-wrapper">
          {content.discount !== null ? (
            <div className="discount-wrapper-price">
              <div className="full-price-wrapper-discount">
                <p>{content.price * dataCartIn.amount} грн</p>
              </div>
              <div className="discount-price-wrapper">
                <p>
                  {content.discount * dataCartIn.amount <= 0
                    ? 1
                    : content.discount * dataCartIn.amount}{" "}
                  грн
                </p>
              </div>
            </div>
          ) : (
            <div className="full-price-wrapper">
              <p>
                {content.price * dataCartIn.amount <= 0
                  ? 1
                  : content.price * dataCartIn.amount}{" "}
                грн
              </p>
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
