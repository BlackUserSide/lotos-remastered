import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../api/shop";
import { IDataProd } from "../type";
import { ItemShop } from "./ItemShop";
export const DataItemShop: React.FC = () => {
  const [dataProduct, setDataProduct] = useState<IDataProd[]>([]);
  useEffect(() => {
    getAllProduct()
      .then((res) => {
        if (res) {
          setDataProduct(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="data-item-shop">
      <div className="container-item">
        {dataProduct.map((e, i) => (
          <ItemShop content={e} key={i} />
        ))}
      </div>
    </div>
  );
};
