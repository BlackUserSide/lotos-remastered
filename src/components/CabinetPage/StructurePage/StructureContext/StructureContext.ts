import { IMainDataStructure } from "./../types";
import React from "react";
export type ITypeStructure = {
  dataStructure: Array<IMainDataStructure>;
  newDataStruct: (idUser: number, idLine: number) => void;
};

export const StructureContext = React.createContext<Partial<ITypeStructure>>(
  {}
);
