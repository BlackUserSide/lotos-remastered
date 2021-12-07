import { createContext } from "react";

export interface IDataOrder {
  dataOrder: TDataOrder;
  changeHandler: (newObjOrder: TDataOrder) => void;
  fullPrice: number;
  setFullPrices: (price: number) => void;
  orderId: string;
  setOrderId: (id: string) => void;
}
export type TDataOrder = {
  [key: string]: string | number;
  dataCart: any;
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
