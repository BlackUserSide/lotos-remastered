import React, { useContext } from "react";
import { ShopContext } from "../ShopContext/ShopContext";
import { ItemShop } from "./ItemShop";

export const DataItemShop: React.FC = () => {
  const { dataFilter } = useContext(ShopContext);
  return (
    <div className="data-item-shop">
      <div className="container-item">
        {dataFilter
          ? dataFilter.map((e, i) => <ItemShop content={e} key={i} />)
          : ""}
      </div>
    </div>
  );
};
