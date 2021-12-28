import React, { useCallback, useEffect, useState } from "react";
import { IOrderCartMain } from "../type";
import deleteICO from "../../../img/iconCart/delete.png";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItemSaleGift } from "../../../redux/Cart/actionsCart";
import { TDataCart } from "../ContextOrder/ContextOrder";

type TProps = {
  content: IOrderCartMain;
};

export const ItemCartGift: React.FC<TProps> = ({ content }) => {
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
        if (e.id === content.id && e.sale) {
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
        <p>Акційний товар 3+1</p>
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
          <div className="full-price-wrapper">
            <p>1 грн</p>
          </div>
        </div>
        <div
          className="delete-btn-wrapper"
          onClick={() => dispatch(removeItemSaleGift(content.id))}
        >
          <img src={deleteICO} alt="" />
        </div>
      </div>
    </div>
  );
};
