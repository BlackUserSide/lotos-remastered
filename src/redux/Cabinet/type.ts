import { IDataStructure } from "../../components/CabinetPage/StructurePage/types";

export interface IStateCabinet {
  dataUser: IDataUserRedux;
  dataStructure: IDataStructure[];
}

export interface IDataUserRedux {
  firstName: string;
  lastName: string;
  surname: string;
  phone: string;
  email: string;
}
export interface IActionCabinet {
  type: string;
  payload: IDataUserRedux;
}
