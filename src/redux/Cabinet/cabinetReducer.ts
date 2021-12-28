import { IActionCabinet, IStateCabinet } from "./type";
import {
  SAVE_USER_DATA,
  SET_AUTH_USER,
  SET_COUNTER_LINE,
  UPDATE_STRUCTURE_DATA,
} from "./actionConst";

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
  auth: false,
  dataCounter: {
    line: 0,
    allSumLine: 0,
  },
};
export const cabinetReducer = (
  state: IStateCabinet = initState,
  action: IActionCabinet
): IStateCabinet => {
  switch (action.type) {
    case SAVE_USER_DATA:
      //eslint-disable-next-line
      return (<IStateCabinet>{
        ...state,
        dataUser: action.payload,
      }) as IStateCabinet;
    case UPDATE_STRUCTURE_DATA:
      //eslint-disable-next-line
      return (<IStateCabinet>{
        ...state,
        dataStructure: action.payload,
      }) as IStateCabinet;
    case SET_AUTH_USER:
      return { ...state, auth: action.payload } as IStateCabinet;
    case SET_COUNTER_LINE:
      return { ...state, dataCounter: action.payload } as IStateCabinet;
    default:
      return state;
  }
};
