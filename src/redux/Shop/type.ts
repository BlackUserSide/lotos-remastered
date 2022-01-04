import {
  ICategory,
  ISubCategory,
} from "./../../components/ShopPage/CategoryWrapper/type";
import { IDataProd } from "./../../components/ShopPage/type";
export interface IStateShop {
  dataShop: IDataProd[];
  dataFilter: IDataProd[];
  loaderProducts: boolean;
  category: ICategory[];
  subCategory: ISubCategory[];
}
export interface IActionShop {
  type: string;
  payload: IDataProd[] | boolean | ICategory[] | ISubCategory[];
}
