import { TDataCart } from "./../../components/CartContext/CartContext";
export interface IStateCart {
  dataCart: TDataCart[];
  countCart: number;
}

export interface IActionCart {
  type: string;
  payload: TDataCart[] | number;
}
