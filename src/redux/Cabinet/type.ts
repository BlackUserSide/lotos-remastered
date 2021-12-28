import { IMainDataStructure } from "../../components/CabinetPage/StructurePage/types";

export interface IStateCabinet {
  dataUser: IDataUserRedux;
  dataStructure: IMainDataStructure[];
  loader: boolean;
  auth: boolean;
  dataCounter: TCounterUserLine;
}
export type TCounterUserLine = {
  line: number;
  allSumLine: number;
};
export interface IDataUserRedux {
  firstName: string;
  lastName: string;
  surname: string;
  phone: string;
  email: string;
  id: number;
}
export interface IActionCabinet {
  type: string;
  payload: IDataUserRedux | IMainDataStructure[] | boolean | TCounterUserLine;
}
