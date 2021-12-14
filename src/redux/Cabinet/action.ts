import { getDataUser } from "../../components/api/user";
import { SAVE_USER_DATA, UPDATE_STRUCTURE_DATA } from "./actionConst";
import { IMainDataStructure } from "../../components/CabinetPage/StructurePage/types";
import { getDataStrForUser } from "../../components/function/getDataStrForUser";

export const saveUserData = () => {
  return async (dispatch: any) => {
    try {
      const data = await getDataUser().then((res) => {
        if (res) {
          return res.data;
        }
      });

      dispatch({ type: SAVE_USER_DATA, payload: data[0] });
    } catch (e) {}
  };
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
