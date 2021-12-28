import { RootState } from "./../rootReducer";
import { IActionCabinet, TCounterUserLine } from "./type";
import { getDataUser } from "../../components/api/user";
import {
  SAVE_USER_DATA,
  SET_AUTH_USER,
  SET_COUNTER_LINE,
  SET_LOUADER_COUNTER,
  UPDATE_STRUCTURE_DATA,
} from "./actionConst";
import { IMainDataStructure } from "../../components/CabinetPage/StructurePage/types";
import { getDataStrForUser } from "../../components/function/getDataStrForUser";

export const saveUserData = () => {
  return async (dispatch: any) => {
    try {
      const data = await getDataUser().then((res) => {
        if (res) {
          console.log(res, "dataUSer");
          switch (res.status) {
            case 200:
              dispatch(setAuthUser(true));
              return res.data;
            case 401:
              localStorage.removeItem("token");
              dispatch(setAuthUser(false));
              break;
            default:
              dispatch(setAuthUser(false));
              break;
          }
        }
      });
      //dispatch(getCounterStructure());
      dispatch({ type: SAVE_USER_DATA, payload: data[0] });
    } catch (e) {}
  };
};
export const setAuthUser = (auth: boolean) => {
  return {
    type: SET_AUTH_USER,
    payload: auth,
  } as IActionCabinet;
};
export const updateDataStructure = (dataStructure: IMainDataStructure[]) => {
  return async (dispatch: any) => {
    const data = await getDataStrForUser(0, 0, dataStructure).then((res) => {
      if (res) {
        return res;
      }
    });
    dispatch({ type: UPDATE_STRUCTURE_DATA, payload: data });
  };
};
export const getCounterStructure = () => {
  return async (dispatch: any, getState: any) => {
    const { cabinet } = getState() as RootState;
    dispatch({ type: SET_LOUADER_COUNTER, payload: true });
    const response = await fetch(
      `http://91.228.155.147:8036/api/counter/${cabinet.dataUser.id}`
    );
    const json = await response.json();
    setTimeout(
      () => dispatch({ type: SET_LOUADER_COUNTER, payload: false }),
      2500
    );
    const newArray: TCounterUserLine = {
      line: json[0],
      allSumLine: json[1],
    };
    console.log(newArray);

    dispatch({ type: SET_COUNTER_LINE, payload: newArray });
  };
};
