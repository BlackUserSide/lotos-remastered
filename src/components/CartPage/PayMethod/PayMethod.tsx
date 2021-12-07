import React, { useContext, useEffect, useState } from "react";
import { HeaderCart } from "../HeaderCart/HeaderCart";
import visa from "../../../img/visa.png";
import mc from "../../../img/masterCard.png";
import { paymentFunc } from "../../function/payment";
import crypto from "crypto";
import { ContextOrder } from "../ContextOrder/ContextOrder";
interface IPayment {
  data: string;
  signature: string;
}
export const PayMethod: React.FC = () => {
  const { fullPrice } = useContext(ContextOrder);
  const [dataOrders, setDataOrders] = useState<IPayment>({
    data: "",
    signature: "",
  });
  const { orderId } = useContext(ContextOrder);

  useEffect(() => {
    console.log(fullPrice, "full price in paymthod");

    if (fullPrice && orderId) {
      const data = paymentFunc(fullPrice, orderId);
      if (dataOrders.data === "") {
        setDataOrders((prev) => ({
          ...prev,
          data: data,
        }));
      }

      if (dataOrders.signature === "") {
        const signString =
          `cE5BNvHlypmSoYY7XAtgzQbZaiHESRoBcKaEuaoY` +
          data +
          "cE5BNvHlypmSoYY7XAtgzQbZaiHESRoBcKaEuaoY";
        const sha1 = crypto.createHash("sha1");
        sha1.update(signString);
        const signature = sha1.digest("base64");
        setDataOrders((prev) => ({
          ...prev,
          signature: signature,
        }));
      }
    }
  }, [fullPrice, orderId, dataOrders.data, dataOrders.signature]);
  console.log(orderId);

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
              {dataOrders.data !== "" ? (
                <form
                  method="POST"
                  action="https://www.liqpay.ua/api/3/checkout"
                  accept-charset="utf-8"
                >
                  <input type="hidden" name="data" value={dataOrders.data} />
                  <input
                    type="hidden"
                    name="signature"
                    value={dataOrders.signature}
                  />
                  <input
                    type="image"
                    src="//static.liqpay.ua/buttons/p1ru.radius.png"
                    alt="/"
                  />
                </form>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
