import React, { useCallback, useContext, useEffect, useState } from "react";
import { getCartProducts } from "../../api/shop";
import { TDataCart } from "../../CartContext/CartContext";
import { ContextOrder } from "../ContextOrder/ContextOrder";
import { IOrderCartMain } from "../type";
import { ItemCartMain } from "./ItemCartMain";

export const MainCart: React.FC = () => {
  const [dataCart, setDataCart] = useState<TDataCart[]>([]);
  const [mainCart, setMainCart] = useState<IOrderCartMain[]>([]);
  const { setFullPrices } = useContext(ContextOrder);
  const updateDataCart = useCallback(() => {
    const data = localStorage.getItem("cart");
    if (data !== null) {
      const tmpData = JSON.parse(data);
      if (tmpData.length >= 1) {
        let tmp: number[] = [];
        tmpData.map((e: any) => {
          tmp.push(e.id);
          return e;
        });

        getCartProducts(tmp)
          .then((res) => {
            if (res) {
              let tmpPrice = 0;
              setMainCart(res.data);
            }
          })
          .catch((err) => console.log(err));
      }
    }
    setDataCart([]);
  }, []);
  useEffect(() => {
    const tmpData = localStorage.getItem("cart");
    if (tmpData !== null) {
      setDataCart(JSON.parse(tmpData));
    }
  }, []);
  useEffect(() => {
    updateDataCart();
  }, [updateDataCart]);
  useEffect(() => {
    if (dataCart.length >= 1) {
      let tmpPrice = 0;
    }
  });

  return (
    <div className="main-cart-wrapper">
      <div className="container-cart-wrapper">
        {mainCart?.length >= 1
          ? mainCart.map((e, i) => (
              <ItemCartMain
                content={e}
                key={i}
                updateDataCart={updateDataCart}
              />
            ))
          : ""}
      </div>
    </div>
  );
};
