export interface IStateStructure {
  dataStructure: IDataStructureRedux[];
}
export interface IDataStructureRedux {
  id: number;
  firstName: string;
  lastName: string;
  surname: string;
  dataStruct: IDataStructureRedux[];
}
export interface IActionStructure {
  type: string;
  payload: IDataStructureRedux[];
}
