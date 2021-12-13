import { IActionCabinet, IStateCabinet } from "./type";
import { SAVE_USER_DATA } from "./actionConst";

const initState: IStateCabinet = {
  dataUser: {
    firstName: "",
    phone: "",
    surname: "",
    lastName: "",
    email: "",
  },
  dataStructure: [],
};
export const cabinetReducer = (
  state: IStateCabinet = initState,
  action: IActionCabinet
): IStateCabinet => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return { ...state, dataUser: action.payload };
    default:
      return state;
  }
};
