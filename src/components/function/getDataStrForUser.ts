import { getDataStructure } from "../api/structure";
import { IMainDataStructure } from "./../CabinetPage/StructurePage/types";
export const getDataStrForUser = (
  idUser: number,
  idLine: number,
  dataStruture: Array<IMainDataStructure>
) => {
  if (dataStruture.length >= idLine) {
    let newArr: Array<IMainDataStructure> = [];

    for (let i = 0; dataStruture.length >= i; i++) {
      if (i <= idLine) {
        newArr.push(dataStruture[i]);
      }
    }

    getDataStructure(idUser)
      .then((res) => {
        if (res) {
          let newData = {
            id: dataStruture.length,
            data: res.data,
          };
          newArr.push(newData);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return newArr;
  }
  getDataStructure(idUser)
    .then((res) => {
      if (res) {
        let newData = {
          id: dataStruture.length,
          data: res.data,
        };
        dataStruture.push(newData);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return dataStruture;
};
