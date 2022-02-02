import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/rootReducer";
import { getDataSturctureApi } from "../../../../redux/Structure/action";
import { IDataStructureRedux } from "../../../../redux/Structure/type";
import { StructureItem } from "./StructureItem";
import "./structurelist.sass";
export const StructureList: React.FC = () => {
  const dispatch = useDispatch();
  const dataStructure = useSelector(
    (state: RootState) => state.structure.dataStructure
  );
  React.useEffect(() => {
    dispatch(getDataSturctureApi());
    //console.log(testAbc(dataStructure, 22), "test");
  }, [dispatch]);
  const handleData = (test: IDataStructureRedux[]) => {
    return [...test.map((e, i) => <StructureItem data={e} key={i} />)];
  };
  let showHTML = handleData(dataStructure);

  //const getUserDataStruct = (id: number) => {};
  return <div className="structure-list">{showHTML}</div>;
};
