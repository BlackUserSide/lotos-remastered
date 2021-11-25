import React, { useCallback, useEffect, useState } from "react";
import { getAllProduct } from "../../api/shop";
import { IDataProd } from "../type";
import { ShopContext } from "./ShopContext";

export const ShopComponentContext: React.FC = ({ children }) => {
  const [dataProduct, setDataProduct] = useState<IDataProd[]>();
  const [activeFilter, setActiveFilter] = useState<number>(1);
  const valueContext = {
    dataProduct: dataProduct,
    changeFilter: (activeFilter: number) => {
      setActiveFilter(activeFilter);
      if (activeFilter === 3) {
        const newDataArray = dataProduct?.sort(compareNumbers);
        setDataProduct(newDataArray);
      }
      if (activeFilter === 4) {
        const newDataArray = dataProduct?.sort(compareNumbersUnit);
        setDataProduct(newDataArray);
      }
    },
    catergoryFilter: (category: number) => {
      const newData = dataProduct?.filter((e) => {
        return e.categoryId === category;
      });
      setDataProduct(newData);
    },
    clearFilterCategory: () => {
      updateWrapper();
    },
    activeFilter: activeFilter,
  };
  const updateWrapper = useCallback(() => {
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
  useEffect(() => {
    updateWrapper();
  }, [updateWrapper]);
  function compareNumbers(a: any, b: any) {
    return a - b;
  }
  function compareNumbersUnit(a: any, b: any) {
    return b - a;
  }
  return (
    <>
      <ShopContext.Provider value={valueContext}>
        {children}
      </ShopContext.Provider>
    </>
  );
};
