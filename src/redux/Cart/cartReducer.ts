import { GET_DATA_CART, GET_GOUNT_CART } from "./actionsConst";
import { IStateCart, IActionCart } from "./type";
const initState: IStateCart = {
  dataCart: [],
  countCart: 0,
};
export const cartReducer = (
  state: IStateCart = initState,
  action: IActionCart
) => {
  switch (action.type) {
    case GET_GOUNT_CART:
      return { ...state, countCart: action.payload };
    case GET_DATA_CART:
      return { ...state, dataCart: action.payload };
    default:
      return state;
  }
};
