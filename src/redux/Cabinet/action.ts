import { getDataUser } from "../../components/api/user";
import { SAVE_USER_DATA } from "./actionConst";

export const saveUserData = () => {
  return async (dispatch: any) => {
    try {
      const data = await getDataUser().then((res) => {
        if (res) {
          return res.data;
        }
      });
      console.log(data[0]);
      dispatch({ type: SAVE_USER_DATA, payload: data[0] });
    } catch (e) {}
  };
};
