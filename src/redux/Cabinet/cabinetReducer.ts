import { IActionCabinet, IStateCabinet } from "./type";
import {
  GO_DOWN_PAGE,
  SAVE_USER_DATA,
  SET_AUTH_USER,
  SET_COUNTER_LINE,
  SET_LOUADER_COUNTER,
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
  loaderCounter: false,
  auth: false,
  dataCounter: {
    line: null,
    allSumLine: null,
  },
  goDown: false,
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
    case SET_LOUADER_COUNTER:
      return { ...state, loaderCounter: action.payload } as IStateCabinet;
    case GO_DOWN_PAGE:
      return { ...state, goDown: action.payload } as IStateCabinet;
    default:
      return state;
  }
};
