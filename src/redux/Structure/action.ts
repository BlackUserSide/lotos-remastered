import { getDataStructure } from "../../components/api/structure";
import { RootState } from "../rootReducer";
import { SET_DATA_STRUCTURE } from "./actionConst";
import { IDataStructureRedux } from "./type";
import { changeProps } from "find-and";
export const getDataSturctureApi = () => {
  return async (dispatch: any) => {
    const response = await getDataStructure(0)
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 200:
              const newArr = res.data.map((e: IDataStructureRedux) => {
                e.dataStruct = [];
                return e;
              });
              return newArr;
          }
        }
      })
      .catch((err) => console.log(err));
    dispatch({ type: SET_DATA_STRUCTURE, payload: response });
  };
};
export const getDataStructureUserApi = (id: number) => {
  return async (dispatch: any, getStore: any) => {
    const { structure } = getStore() as RootState;
    const response = await getDataStructure(id)
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 200:
              const newArr = res.data.map((e: IDataStructureRedux) => {
                e.dataStruct = [];
                return e;
              });
              return newArr;
          }
        }
      })
      .catch((err) => console.log(err));
    console.log(response, "response-get");

    const newArr = changeDataStructure(structure.dataStructure, id, response);
    dispatch({ type: SET_DATA_STRUCTURE, payload: newArr });
  };
};
export const deleteDataStruct = (id: number) => {
  return async (dispatch: any, getStore: any) => {
    const { structure } = getStore() as RootState;
    const newData = changeProps(
      structure.dataStructure,
      { id: id },
      { dataStruct: [] }
    );
    dispatch({ type: SET_DATA_STRUCTURE, payload: newData });
  };
};
export const changeDataStructure = (
  arr: IDataStructureRedux[],
  id: number,
  newArr: IDataStructureRedux[]
) => {
  return changeProps(arr, { id: id }, { dataStruct: newArr });
};
