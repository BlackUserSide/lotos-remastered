import React, { useContext, useEffect, useState } from "react";
import { IOrderCartMain } from "../type";
import deleteICO from "../../../img/iconCart/delete.png";
import test from "../../../img/testProd.png";
import left from "../../../img/prodIcon/left.png";
import right from "../../../img/prodIcon/right.png";
import { CartContext, TDataCart } from "../../CartContext/CartContext";
type TProps = {
  content: IOrderCartMain;
  updateDataCart: any;
  dataCart: any;
};

export const ItemCartMain: React.FC<TProps> = ({ content, updateDataCart }) => {
  const { deleteItem, changeAmount, dataCart } = useContext(CartContext);
  const [dataCartIn, setDataCartIn] = useState<TDataCart>({
    id: 0,
    amount: 0,
  });
  useEffect(() => {
    if (dataCart) {
      let tmp = dataCart.find((e) => {
        return e.id === content.id;
      });
      if (tmp) {
        setDataCartIn(tmp);
      }
    }
  }, [dataCart, content.id]);
  const deleteItemHandler = () => {
    if (deleteItem) {
      deleteItem(content.id);
      updateDataCart();
    }
  };
  const changeHandler = (amount: number) => {
    if (changeAmount) {
      changeAmount(content.id, amount);
      updateDataCart();
    }
  };

  return (
    <div className="main-cart-item">
      {dataCart ? (
        <div className="container-item-wrapper">
          <div className="image-wrapper">
            <img src={test} alt="" />
          </div>
          <div className="name-wrapper">
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
                  <p>{content.price} грн</p>
                </div>
                <div className="discount-price-wrapper">
                  <p>{content.discount} грн</p>
                </div>
              </div>
            ) : (
              <div className="full-price-wrapper">
                <p>{content.price} грн</p>
              </div>
            )}
          </div>
          <div className="delete-btn-wrapper" onClick={deleteItemHandler}>
            <img src={deleteICO} alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
