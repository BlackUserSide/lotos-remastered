import { createContext, FormEvent } from "react";

export interface IDataOrder {
  dataOrder: TDataOrder;
  changeHandler: (e: FormEvent<HTMLInputElement> | number) => void;
  fullPrice: number;
  setFullPrices: (price: number) => void;
}
export type TDataOrder = {
  dataCart: any;
  allPrice: number;
  deliveryMethod: number;
  firstName: string;
  lastName: string;
  surname: string;
  phone: string;
  email: string;
  payMethod: number;
};
export const ContextOrder = createContext<Partial<IDataOrder>>({});
