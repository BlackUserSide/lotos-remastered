import { TDataCart } from "./../../CartContext/CartContext";
import { createContext } from "react";

export interface IDataOrder {
  dataOrder: TDataOrder;
  changeHandler: (newObjOrder: TDataOrder) => void;
  fullPrice: number;
  setFullPrices: (price: number) => void;
  orderId: string;
  setOrderId: (id: string) => void;
  setDataCart: () => void;
}
export type TDataOrder = {
  [key: string]: string | number | TDataCart[];
  dataCart: TDataCart[];
  allPrice: number;
  deliveryMethod: number;
  firstName: string;
  lastName: string;
  surname: string;
  phone: string;
  email: string;
  payMethod: number;
  city: string;
  typePay: number;
  numberPost: string;
};
export const ContextOrder = createContext<Partial<IDataOrder>>({});
