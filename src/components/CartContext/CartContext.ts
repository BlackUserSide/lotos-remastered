import { createContext } from "react";

export interface ICartContext {
  dataCart: TDataCart[];
  changeAmount: (id: number, amount: number) => void;
  deleteItem: (id: number) => void;
  countCart: number;
  addCart: (id: number, amount: number) => void;
  clearCart: () => void;
}
export type TDataCart = {
  id: number;
  amount: number;
  sale: boolean;
};

export const CartContext = createContext<Partial<ICartContext>>({});
