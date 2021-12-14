import { IActionCabinet, IStateCabinet } from "./type";
import { SAVE_USER_DATA, UPDATE_STRUCTURE_DATA } from "./actionConst";

const initState: IStateCabinet = {
  dataUser: {
    firstName: "",
    phone: "",
    surname: "",
    lastName: "",
    email: "",
    id: 0,
  },
  dataStructure: [],
  loader: false,
  auth: true,
};
export const cabinetReducer = (
  state: IStateCabinet = initState,
  action: IActionCabinet
): IStateCabinet => {
  switch (action.type) {
    case SAVE_USER_DATA:
      //eslint-disable-next-line
      return <IStateCabinet>{ ...state, dataUser: action.payload };
    case UPDATE_STRUCTURE_DATA:
      //eslint-disable-next-line
      return <IStateCabinet>{ ...state, dataStructure: action.payload };
    default:
      return state;
  }
};
