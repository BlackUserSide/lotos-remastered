import React, { useEffect, useState } from "react";
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
    city: "",
    typePay: 0,
    numberPost: "",
  });
  const [fullPrice, setFullPrice] = useState<number>(0);
  const [orderId, setOrderId] = useState<string>("");
  useEffect(() => {
    const dataLocal = localStorage.getItem("cart");
    if (dataLocal !== null) {
      const parseData = JSON.parse(dataLocal);
      setDataUser((prev) => ({
        ...prev,
        dataCart: parseData,
      }));
    }
  }, []);
  const val: IDataOrder = {
    dataOrder: dataUser,
    changeHandler: (newObjOrder) => {
      setDataUser(newObjOrder);
    },
    fullPrice: fullPrice,
    setFullPrices: (price: number) => {
      setFullPrice(price);
    },
    orderId: orderId,
    setOrderId: (id) => {
      setOrderId(id);
    },
  };

  return (
    <>
      <ContextOrder.Provider value={val}>{children}</ContextOrder.Provider>
    </>
  );
};
