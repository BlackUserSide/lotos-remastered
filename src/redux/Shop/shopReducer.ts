import {
  SET_ACTIVE_CATEGORY,
  SET_ACTIVE_FILTER,
  SET_CATEGORY_WRAPPER,
  SET_FILTER_PRODUCTS,
  SET_ITEM_PRODUCTS,
  SET_LOADER_PRODUCTS,
  SET_SUB_CATEGORY_WRAPPER,
} from "./actionConst";
import { IStateShop, IActionShop } from "./type";
const initState: IStateShop = {
  dataShop: [],
  dataFilter: [],
  loaderProducts: false,
  category: [],
  subCategory: [],
  activeCategory: 0,
  activeFilter: 0,
};
export const shopReducer = (
  state: IStateShop = initState,
  action: IActionShop
): IStateShop => {
  switch (action.type) {
    case SET_ITEM_PRODUCTS:
      return { ...state, dataShop: action.payload } as IStateShop;
    case SET_LOADER_PRODUCTS:
      return { ...state, loaderProducts: action.payload } as IStateShop;
    case SET_FILTER_PRODUCTS:
      return { ...state, dataFilter: action.payload } as IStateShop;
    case SET_CATEGORY_WRAPPER:
      return { ...state, category: action.payload } as IStateShop;
    case SET_SUB_CATEGORY_WRAPPER:
      return { ...state, subCategory: action.payload } as IStateShop;
    case SET_ACTIVE_CATEGORY:
      return { ...state, activeCategory: action.payload } as IStateShop;
    case SET_ACTIVE_FILTER:
      return { ...state, activeFilter: action.payload } as IStateShop;
    default:
      return state;
  }
};
