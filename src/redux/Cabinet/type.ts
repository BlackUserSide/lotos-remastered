import { IMainDataStructure } from "../../components/CabinetPage/StructurePage/types";

export interface IStateCabinet {
  dataUser: IDataUserRedux;
  dataStructure: IMainDataStructure[];
  loader: boolean;
  auth: boolean;
}

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
  payload: IDataUserRedux | IMainDataStructure[] | boolean;
}
