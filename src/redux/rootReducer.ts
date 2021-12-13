import { combineReducers } from "redux";
import { headerReducer } from "./header/headerReducer";
import { cabinetReducer } from "./Cabinet/cabinetReducer";
export const rootReducer = combineReducers({
  header: headerReducer,
  cabinet: cabinetReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
