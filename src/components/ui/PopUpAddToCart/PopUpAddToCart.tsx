import React from "react";
import { useHistory } from "react-router-dom";
import { IDataProd } from "../../ShopPage/type";
import "./popupaddtocart.sass";
type TProps = {
  content: IDataProd;
  amount: number;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopUpAddToCart: React.FC<TProps> = ({
  content,
  amount,
  setShowPopUp,
}) => {
  const history = useHistory();
  return (
    <div className="pop-up-add-to-cart">
      <div className="bg-lock"></div>
      <div className="popup-wrapper-add-to-cart">
        <h3 className="h3">
          Доданий до кошика <br /> {content.name}{" "}
        </h3>
        <p>
          В кількості {amount} шт. на загальну суму:{" "}
          {content.discount !== null
            ? content.discount * amount
            : content.price * amount}{" "}
          грн
        </p>
        <div className="btn-collection-add">
          <div
            className="btn-wrapper-go-to-cart"
            onClick={() => history.push("/cart")}
          >
            <span>До кошику</span>
          </div>
          <div
            className="btn-wrapper-stay-shop"
            onClick={() => setShowPopUp(false)}
          >
            <span>Продовжити покупки</span>
          </div>
        </div>
      </div>
    </div>
  );
};
