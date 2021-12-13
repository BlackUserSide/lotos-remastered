import React, { useEffect, useState } from "react";
//import { getDataStructure } from "../../../api/structure";
import { getDataStrForUser } from "../../../function/getDataStrForUser";
import { IMainDataStructure } from "../types";
import { ITypeStructure, StructureContext } from "./StructureContext";

export const StructureComponentContext: React.FC = ({ children }) => {
  const [dataStructure, setDataStructure] = useState<Array<IMainDataStructure>>(
    []
  );
  useEffect(() => {
    if (dataStructure.length === 0) {
      getDataStrForUser(0, 0, dataStructure)
        .then((res) => {
          if (res) {
            setDataStructure(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dataStructure]);

  const valContext: ITypeStructure = {
    dataStructure: dataStructure,
    newDataStruct: (idUser: number, idLine: number) => {
      getDataStrForUser(idUser, idLine, dataStructure)
        .then((res) => {
          if (res) {
            setDataStructure(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  };
  return (
    <>
      <StructureContext.Provider value={valContext}>
        {children}
      </StructureContext.Provider>
    </>
  );
};
