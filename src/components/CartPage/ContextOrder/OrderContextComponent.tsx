import React, { useState } from "react";
import { ContextOrder, IDataOrder, TDataOrder } from "./ContextOrder";

export const OrderContextComponent: React.FC = ({ children }) => {
  const [dataUser, setDataUser] = useState<TDataOrder>({
    dataCart: "",
    allPrice: 0,
    deliveryMethod: 0,
    firstName: "",
    lastName: "",
    surname: "",
    phone: "",
    email: "",
    payMethod: 0,
  });
  const [fullPrice, setFullPrice] = useState<number>(0);
  const val: IDataOrder = {
    dataOrder: dataUser,
    changeHandler: (newObjOrder) => {
      setDataUser(newObjOrder);
    },
    fullPrice: fullPrice,
    setFullPrices: (price: number) => {
      setFullPrice(price);
    },
  };

  return (
    <>
      <ContextOrder.Provider value={val}>{children}</ContextOrder.Provider>
    </>
  );
};
