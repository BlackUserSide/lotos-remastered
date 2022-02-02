import * as React from "react";
import { useDispatch } from "react-redux";
import {
  deleteDataStruct,
  getDataStructureUserApi,
} from "../../../../redux/Structure/action";
import { IDataStructureRedux } from "../../../../redux/Structure/type";

interface Tprops {
  data: IDataStructureRedux;
}
export const StructureItem: React.FC<Tprops> = ({ data }) => {
  const dispatch = useDispatch();
  const changeHandlerData = () => {
    if (data.dataStruct.length > 0) {
      dispatch(deleteDataStruct(data.id));
    }
    dispatch(getDataStructureUserApi(data.id));
  };
  return (
    <div className="structure-item-list">
      <div className="container-wrapper">
        <div className="status-open" onClick={changeHandlerData}>
          <div className="status-open-active">
            {data.dataStruct.length > 0 ? (
              <span className="span-open-status"></span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="id-wrapper block-structure-wrapper">
          <div className="id">
            <p>ID: {data.id}</p>
          </div>
        </div>
        <div className="name-wrapper block-structure-wrapper">
          <p>{`${data.surname} ${data.firstName} ${data.lastName}`}</p>
        </div>
        <div className="balance-wrapper block-structure-wrapper">
          <p>Баланс: Не разраховано</p>
        </div>
        <div className="structure-count-overall block-structure-wrapper">
          <p></p>
        </div>
      </div>

      {data.dataStruct &&
        data.dataStruct.map((i, n) => <StructureItem data={i} key={n} />)}
    </div>
  );
};
