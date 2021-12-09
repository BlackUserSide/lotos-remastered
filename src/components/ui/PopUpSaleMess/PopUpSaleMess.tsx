import React from "react";
import "./popupsalemess.sass";
type TProps = {
  setActivePop: any;
  nameProd: string;
};
export const PopUpSaleMess: React.FC<TProps> = ({ setActivePop, nameProd }) => {
  return (
    <div className="pop-up-sale-mess">
      <div
        className="bg-lock"
        onClick={() => {
          setActivePop(false);
        }}
      ></div>
      <div className="main-message-wrapper">
        <h3 className="h3">На товар {nameProd} підключено акцію 3 + 1</h3>
        <div
          className="btn-wrapper"
          onClick={() => {
            setActivePop(false);
          }}
        >
          <span>Ок</span>
        </div>
      </div>
    </div>
  );
};
