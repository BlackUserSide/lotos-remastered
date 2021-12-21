import {
  ADD_SALE_ITEM,
  GET_DATA_CART,
  GET_GOUNT_CART,
  SET_FULL_PRICE_CART,
  SHOW_POP_SALE,
} from "./actionsConst";
import { IStateCart, IActionCart } from "./type";
const initState: IStateCart = {
  dataCart: [],
  countCart: 0,
  fullPrice: 0,
  loader: false,
  popUpSale: false,
  saleItem: [],
  popUpAddSale: false,
};
export const cartReducer = (
  state: IStateCart = initState,
  action: IActionCart
): IStateCart => {
  switch (action.type) {
    case GET_GOUNT_CART:
      return { ...state, countCart: action.payload } as IStateCart;
    case GET_DATA_CART:
      return { ...state, dataCart: action.payload } as IStateCart;
    case SET_FULL_PRICE_CART:
      return { ...state, fullPrice: action.payload } as IStateCart;
    case ADD_SALE_ITEM:
      return { ...state, saleItem: action.payload } as IStateCart;
    case SHOW_POP_SALE:
      return { ...state, popUpSale: action.payload } as IStateCart;

    default:
      return state;
  }
};
