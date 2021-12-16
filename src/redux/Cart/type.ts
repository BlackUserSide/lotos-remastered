import { IOrderCartMain } from "./../../components/CartPage/type";
export interface IStateCart {
  dataCart: IOrderCartMain[];
  countCart: number;
  fullPrice: number;
}

export interface IActionCart {
  type: string;
  payload: IOrderCartMain[] | number;
}
