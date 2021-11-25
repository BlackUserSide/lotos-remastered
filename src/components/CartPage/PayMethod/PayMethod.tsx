import React from "react";
import { HeaderCart } from "../HeaderCart/HeaderCart";
import visa from "../../../img/visa.png";
import mc from "../../../img/masterCard.png";

export const PayMethod: React.FC = () => {
  //const { fullPrice, dataOrder } = useContext(ContextOrder);

  return (
    <>
      <HeaderCart />
      <div className="pay-method-page">
        <div className="container-pay-wrapper">
          <div className="item-pay-wrapper">
            <div className="top-line-wrapper">
              <div className="btn-active-wrapper">
                <span></span>
              </div>
              <div className="name-type">
                <p>Онлайн оплата</p>
              </div>
              <div className="icon-card-wrapper">
                <img src={visa} alt="" />
                <img src={mc} alt="" />
              </div>
            </div>
            <div className="hidden-wrapper">
              {/* <p>
                Сума до сплати:{" "}
                <span>{fullPrice ? fullPrice : "Не разраховано"}</span>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
