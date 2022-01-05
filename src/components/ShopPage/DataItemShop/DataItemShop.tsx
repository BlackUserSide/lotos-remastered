import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { Prealoder } from "../../ui/Preloader/Preloader";

import { ItemShop } from "./ItemShop";

export const DataItemShop: React.FC = () => {
  //const { dataFilter } = useContext(ShopContext);
  const dataShop = useSelector((state: RootState) => state.shop.dataShop);
  const dataFilter = useSelector((state: RootState) => state.shop.dataFilter);
  const loader = useSelector((state: RootState) => state.shop.loaderProducts);
  return (
    <div className="data-item-shop">
      <div className="container-item">
        {loader ? (
          <div className="loader-wrapper-products">
            <Prealoder />
          </div>
        ) : (
          <>
            {dataFilter.length > 0
              ? dataFilter
                ? dataFilter.map((e, i) => <ItemShop content={e} key={i} />)
                : ""
              : dataShop
              ? dataShop.map((e, i) => <ItemShop content={e} key={i} />)
              : ""}
          </>
        )}
      </div>
    </div>
  );
};
