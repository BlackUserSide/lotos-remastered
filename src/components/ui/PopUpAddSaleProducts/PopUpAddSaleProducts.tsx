import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { disablePopSale, showPopSale } from "../../../redux/Cart/actionsCart";
import { RootState } from "../../../redux/rootReducer";

import "./popupaddsaleprod.sass";
export const PopUpAddSaleProducts: React.FC = () => {
  const [activeSale, setActiveSale] = useState<number>(0);
  const dataSale = useSelector((state: RootState) => state.cart.saleItem);
  const dispatch = useDispatch();
  const clickHandler = (id: number) => {
    setActiveSale(id);
  };
  const saveWrapper = () => {
    if (activeSale !== null) {
      //dispatch(saveSaleItem(activeSale));
    }
  };
  return (
    <div className="pop-up-add-sale-product">
      <div className="bg-lock"></div>
      <div className="pop-up-add-sale-wrapper">
        <div className="top-line-wrapper">
          <h1 className="h1">Вам доступна акція 3+1</h1>
          <p>Виберіть товар зі списку, який хочете додати</p>
          <p>Якщо вам не цікава дана пропозиція натисніть кнопку "Скасувати"</p>
        </div>
        <div className="list-item-wrapper">
          {dataSale.map((e, i) => (
            <div
              className={`item-sale-pop ${
                activeSale !== 0 ? "active-item-sale-pop" : ""
              }`}
              onClick={() => clickHandler(e.id)}
              key={i}
            >
              <div className="image-wrapper">
                <img src={`http://91.228.155.147/img/${e.src}`} alt="" />
              </div>
              <div className="name-wrapper">
                <p>{e.name}</p>
              </div>
              <div className="price-wrapper">
                <p>{e.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-handler-wrapper">
          <div
            className="btn-close-sale-pop"
            onClick={() => {
              dispatch(disablePopSale(true));
              dispatch(showPopSale());
            }}
          >
            <span>Скасувати</span>
          </div>
          <div
            className={`btn-save-wrapper ${
              activeSale !== 0 ? "active-btn-save-wrapper" : ""
            }`}
            onClick={saveWrapper}
          >
            <span>Збергти</span>
          </div>
        </div>
      </div>
    </div>
  );
};
