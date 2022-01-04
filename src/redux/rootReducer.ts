import { shopReducer } from "./Shop/shopReducer";
import { cartReducer } from "./Cart/cartReducer";
import { combineReducers } from "redux";
import { headerReducer } from "./header/headerReducer";
import { cabinetReducer } from "./Cabinet/cabinetReducer";

export const rootReducer = combineReducers({
  header: headerReducer,
  cabinet: cabinetReducer,
  cart: cartReducer,
  shop: shopReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
