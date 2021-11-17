import React, { useContext } from "react";
import { IOrderCartMain } from "../type";
import deleteICO from "../../../img/iconCart/delete.png";
import test from "../../../img/testProd.png";
import left from "../../../img/prodIcon/left.png";
import right from "../../../img/prodIcon/right.png";
import { CartContext } from "../../CartContext/CartContext";
type TProps = {
  content: IOrderCartMain;
  updateDataCart: any;
};

export const ItemCartMain: React.FC<TProps> = ({ content, updateDataCart }) => {
  const { deleteItem } = useContext(CartContext);
  const deleteItemHandler = () => {
    if (deleteItem) {
      deleteItem(content.id);
      updateDataCart();
    }
  };
  return (
    <div className="main-cart-item">
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
            // onClick={() => {
            //   changeHandler(amount - 1);
            // }}
            className="left-ico"
            alt=""
          />
          <input type="text" value={1} disabled={true} />
          <img
            src={right}
            // onClick={() => {
            //   changeHandler(amount + 1);
            // }}
            className="right-ico"
            alt=""
          />
        </div>
        <div className="price-wrapper">
          {content.discount !== 0 ? (
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
    </div>
  );
};
