import React, { useEffect, useState } from "react";
import { getDataStructure } from "../../../api/structure";
import { getDataStrForUser } from "../../../function/getDataStrForUser";
import { IMainDataStructure } from "../types";
import { ITypeStructure, StructureContext } from "./StructureContext";

export const StructureComponentContext: React.FC = ({ children }) => {
  const [dataStructure, setDataStructure] = useState<Array<IMainDataStructure>>(
    []
  );

  useEffect(() => {
    if (dataStructure.length === 0) {
      getDataStructure(0)
        .then((res) => {
          if (res) {
            switch (res.status) {
              case 200:
                let data: Array<IMainDataStructure> = [
                  { id: 0, data: res.data },
                ];

                setDataStructure(data);
                break;
            }
          }
        })
        .catch((err) => console.log(err));
    }
  }, [dataStructure]);

  const valContext: ITypeStructure = {
    dataStructure: dataStructure,
    newDataStruct: (idUser: number, idLine: number) => {
      let data = getDataStrForUser(idUser, idLine, dataStructure);
      setDataStructure(data);
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
