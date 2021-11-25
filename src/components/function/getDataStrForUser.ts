import { getDataStructure } from "../api/structure";
import { IMainDataStructure } from "./../CabinetPage/StructurePage/types";
export const getDataStrForUser = async (
  idUser: number,
  idLine: number,
  dataStruture: Array<IMainDataStructure>
) => {
  let newArr: any[] = [];
  if (dataStruture.length === 0) {
    let data = getDataStructure(0)
      .then((res) => {
        if (res) {
          const newObj = { id: 0, data: res.data };
          newArr.push(newObj);

          return newArr;
        }
      })
      .catch((err) => console.log(err));
    return data;
  }
  if (idLine === 0) {
    newArr.push(dataStruture[0]);
    let data = getDataStructure(idUser)
      .then((res) => {
        if (res) {
          const newObj = { id: idLine + 1, data: res.data };
          newArr.push(newObj);

          return newArr;
        }
      })
      .catch((err) => console.log(err));
    return data;
  }
  if (idLine > 0) {
    for (let i = 0; dataStruture.length > i; i++) {
      if (i > idLine) {
        break;
      }
      newArr.push(dataStruture[i]);
    }
    let data = getDataStructure(idUser)
      .then((res) => {
        if (res) {
          const newObj = { id: idLine + 1, data: res.data };
          newArr.push(newObj);

          return newArr;
        }
      })
      .catch((err) => console.log(err));
    return data;
  }
};
