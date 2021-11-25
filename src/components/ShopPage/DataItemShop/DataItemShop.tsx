import React, { useContext } from "react";
import { ShopContext } from "../ShopContext/ShopContext";
import { ItemShop } from "./ItemShop";

export const DataItemShop: React.FC = () => {
  const { dataProduct } = useContext(ShopContext);
  return (
    <div className="data-item-shop">
      <div className="container-item">
        {dataProduct
          ? dataProduct.map((e, i) => <ItemShop content={e} key={i} />)
          : ""}
      </div>
    </div>
  );
};
