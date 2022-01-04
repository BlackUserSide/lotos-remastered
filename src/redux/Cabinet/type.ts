import { IMainDataStructure } from "../../components/CabinetPage/StructurePage/types";

export interface IStateCabinet {
  dataUser: IDataUserRedux;
  dataStructure: IMainDataStructure[];
  loaderCounter: boolean;
  auth: boolean;
  dataCounter: TCounterUserLine;
  goDown: boolean;
}
export type TCounterUserLine = {
  line: number | null;
  allSumLine: number | null;
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
