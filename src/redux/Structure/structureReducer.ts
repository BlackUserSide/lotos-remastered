import { SET_DATA_STRUCTURE } from "./actionConst";
import { testDataStruct } from "./testDataStruct";
import { IActionStructure, IStateStructure } from "./type";

const initialState: IStateStructure = {
  dataStructure: testDataStruct,
};
export const structureReducer = (
  state: IStateStructure = initialState,
  action: IActionStructure
) => {
  switch (action.type) {
    case SET_DATA_STRUCTURE:
      return { ...state, dataStructure: action.payload } as IStateStructure;
    default:
      return state;
  }
};
