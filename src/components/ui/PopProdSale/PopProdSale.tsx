import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { disableProdPopSale } from "../../../redux/Cart/actionsCart";
import { RootState } from "../../../redux/rootReducer";
import { Prealoder } from "../Preloader/Preloader";
import "./popprodsale.sass";
export const PopProdSale: React.FC = () => {
  const history = useHistory();
  const prodSum = useSelector((state: RootState) => state.cart.prodSaleSum);
  const dispatch = useDispatch();
  return (
    <div className="pop-prod-sale">
      <div className="bg-lock"></div>
      <div className="pop-main-prod-sale">
        {prodSum === null ? (
          <Prealoder />
        ) : (
          <>
            <div className="top-line-wrapper">
              <h3 className="h3">Вам доступна фірмова акція лотос</h3>
            </div>
            <p className="main-content">
              Тепер Ви можете повернутись у магазині та вибрати будь-який товар
              зі знижкою на суму {prodSum} грн.
            </p>
            <span className="desc-wrapper">
              * Якщо сума товару менша або дорівнює сумі знижки, Ви купуєте
              товар за ціною 1 грн
            </span>
            <div className="btn-wrapper-pop-prod">
              <div
                className="btn-cansel-wrapper"
                onClick={() => dispatch(disableProdPopSale(true))}
              >
                <span>Скасувати</span>
              </div>
              <div
                className="btn-go-to-shop"
                onClick={() => {
                  history.push("/shop");
                }}
              >
                <span>Повернутись до магазину</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
