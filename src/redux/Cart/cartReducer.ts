import {
  ADD_SALE_ITEM,
  CLEAR_CART,
  DISABE_POP_SALE,
  DISABLE_POP_PROD_SALE,
  GET_DATA_CART,
  GET_GOUNT_CART,
  SAVE_SALE_ITEM,
  SET_ACTION_SALE,
  SET_ACTIVE_SALE,
  SET_FULL_PRICE_CART,
  SET_PROD_ITEM,
  SET_PROD_POP_SALE,
  SET_SUM_PROD_SALE,
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
  prodSale: [],
  saleItemGift: [],
  popUpAddSale: false,
  disablePopSale: false,
  prodSaleSum: 0,
  prodPopSale: false,
  disablePopProdSale: false,
  activeSale: false,
  actionSale: {
    tensProcent: false,
    secondProcent: false,
  },
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
    case SAVE_SALE_ITEM:
      return { ...state, saleItemGift: action.payload } as IStateCart;
    case DISABE_POP_SALE:
      return { ...state, disablePopSale: action.payload } as IStateCart;
    case SET_SUM_PROD_SALE:
      return { ...state, prodSaleSum: action.payload } as IStateCart;
    case SET_PROD_POP_SALE:
      return { ...state, prodPopSale: action.payload } as IStateCart;
    case DISABLE_POP_PROD_SALE:
      return { ...state, disablePopProdSale: action.payload } as IStateCart;
    case SET_PROD_ITEM:
      return { ...state, prodSale: action.payload } as IStateCart;
    case SET_ACTIVE_SALE:
      return { ...state, activeSale: action.payload } as IStateCart;
    case SET_ACTION_SALE:
      return { ...state, actionSale: action.payload } as IStateCart;
    case CLEAR_CART:
      return initState as IStateCart;
    default:
      return state;
  }
};
