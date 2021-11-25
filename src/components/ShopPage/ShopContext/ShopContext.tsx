import { createContext } from "react";
import { IDataProd } from "../type";
export interface IShopData {
  dataProduct: IDataProd[];
  changeFilter: (activeFilter: number) => void;
  catergoryFilter: (category: number) => void;
  clearFilterCategory: () => void;
  activeFilter: number;
}
export const ShopContext = createContext<Partial<IShopData>>({});
