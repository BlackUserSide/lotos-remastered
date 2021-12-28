import { IOrderCartMain } from "./../../components/CartPage/type";
export interface IStateCart {
  dataCart: IOrderCartMain[];
  countCart: number;
  fullPrice: number;
  loader: boolean;
  popUpSale: boolean;
  saleItem: IOrderCartMain[];
  popUpAddSale: boolean;
  prodSale: IOrderCartMain[];
  saleItemGift: IOrderCartMain[];
  disablePopSale: boolean;
  prodSaleSum: number;
  prodPopSale: boolean;
  disablePopProdSale: boolean;
  activeSale: boolean;
  actionSale: TActionSaleProps;
}
export type TActionSaleProps = {
  tensProcent: boolean;
  secondProcent: boolean;
};
export interface IActionCart {
  type: string;
  payload: IOrderCartMain[] | number | boolean | TActionSaleProps;
}
