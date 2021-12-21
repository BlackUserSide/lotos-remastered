import { IOrderCartMain } from "./../../components/CartPage/type";
export interface IStateCart {
  dataCart: IOrderCartMain[];
  countCart: number;
  fullPrice: number;
  loader: boolean;
  popUpSale: boolean;
  saleItem: IOrderCartMain[];
  popUpAddSale: boolean;
}

export interface IActionCart {
  type: string;
  payload: IOrderCartMain[] | number | boolean;
}
