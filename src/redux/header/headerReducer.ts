import { IHeaderAction, IHeaderState } from "./type";
import { CHANGE_HEADER_LINK } from "./actionConst";

const initState: IHeaderState = {
  activeLink: "/",
};
export const headerReducer = (
  state: IHeaderState = initState,
  action: IHeaderAction
) => {
  switch (action.type) {
    case CHANGE_HEADER_LINK:
      return { ...state, activeLink: action.payload };

    default:
      return state;
  }
};
