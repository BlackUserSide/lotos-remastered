import React, { useContext, useEffect, useState } from "react";
import closeIcon from "../../../img/close-icon.png";
import { ContextOrder } from "../../CartPage/ContextOrder/ContextOrder";
import "./popupsale.sass";
type TProps = {
  contentSale: number;
  setActivePopSale: React.Dispatch<React.SetStateAction<number>>;
};

export const PopUpSale: React.FC<TProps> = ({
  contentSale,
  setActivePopSale,
}) => {
  const { fullPrice } = useContext(ContextOrder);
  const [allAmount, setAllAmount] = useState<number>(0);
  useEffect(() => {
    let tmpData = localStorage.getItem("cart");

    if (tmpData !== null) {
      let parseData = JSON.parse(tmpData);
      let tmpAmount = 0;
      parseData.map((e: any) => {
        tmpAmount += e.amount;
        return e;
      });
      setAllAmount(tmpAmount);
    }
  }, []);
  return (
    <div className="pop-up-sale">
      <div className="bg-lock" onClick={() => setActivePopSale(0)}></div>

      <div className="sales-wrapper-manager">
        <div className="close-icon" onClick={() => setActivePopSale(0)}>
          <img src={closeIcon} alt="" />
        </div>
        {contentSale === 1 ? (
          <h3 className="h3">
            Для зареєстрованих користувачів, які скупилися на суму менше{" "}
            <strong>1200 грн</strong> діє знижка <strong>10%</strong>
          </h3>
        ) : (
          ""
        )}
        {contentSale === 2 ? (
          <h3 className="h3">
            Для зареєстрованих користувачів, які скупилися на суму більше{" "}
            <strong>1200 грн</strong> діє знижка <strong>20%</strong>
          </h3>
        ) : (
          ""
        )}
        {contentSale === 3 ? (
          <h3 className="h3">
            Для зареєстрованих користувачів, які купили 3 одиниці товару однієї
            позиції діє знижка <strong>3+1</strong>
          </h3>
        ) : (
          ""
        )}
        {contentSale === 4 ? (
          fullPrice ? (
            allAmount !== 0 ? (
              <h3 className="h3">
                Для зареєстрованих користувачів, які купили товару більше ніж на{" "}
                <strong>1200 грн</strong>, діє фірмова знижка компанії{" "}
                <strong>Lotus-namaste</strong>. Знижка у розмірі середнього
                арефметичного від суми та кількості товарів.{" "}
              </h3>
            ) : (
              ""
            )
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
