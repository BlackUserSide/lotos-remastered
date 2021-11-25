import React, { useCallback, useEffect, useState } from "react";
import { CartContext, ICartContext, TDataCart } from "./CartContext";

export const CartComponentContext: React.FC = ({ children }) => {
  const [dataCart, setDataCart] = useState<TDataCart[]>([]);
  const [countCart, setCountCart] = useState<number>(0);

  const val: ICartContext = {
    dataCart: dataCart,
    clearCart: () => {
      localStorage.removeItem("cart");
      window.location.reload();
    },
    changeAmount: (id: number, amount: number) => {
      let tmpData = localStorage.getItem("cart");
      if (tmpData !== null) {
        let parseData: TDataCart[] = JSON.parse(tmpData);
        let newData = parseData.map((k) => {
          if (k.id === id) {
            k.amount = amount;
          }
          return k;
        });
        console.log(newData);

        localStorage.setItem("cart", JSON.stringify(newData));
        updateDataCart();
      }
    },
    deleteItem: (id: number) => {
      const newArr = dataCart.filter((e) => e.id !== id);
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(newArr));
      setDataCart(newArr);
      window.location.reload();
    },
    countCart: countCart,
    addCart: (id, amount) => {
      const findElement = dataCart.find((e) => {
        if (e.id === id) {
          return e;
        }
        return null;
      });
      if (findElement) {
        const newArray = dataCart.map((e) => {
          if (e.id === id) {
            e.amount += amount;
            return e;
          }
          return e;
        });
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(newArray));
        setDataCart(newArray);
      } else {
        if (dataCart.length > 0) {
          let newArr = dataCart;
          newArr.push({ id: id, amount: amount });
          localStorage.removeItem("cart");
          localStorage.setItem("cart", JSON.stringify(newArr));
          setDataCart(newArr);
        } else {
          let newCart: TDataCart[] = [];
          newCart.push({ id: id, amount: amount });
          localStorage.removeItem("cart");
          localStorage.setItem("cart", JSON.stringify(newCart));
          setDataCart(newCart);
        }
      }
      updateCountWrapepr();
    },
  };

  const updateCountWrapepr = useCallback(() => {
    let localData = localStorage.getItem("cart");
    if (localData !== null) {
      const parseData: TDataCart[] = JSON.parse(localData);
      setDataCart(parseData);
      let tmp = 0;
      parseData.map((e) => {
        tmp += e.amount;
        return e;
      });
      setCountCart(tmp);
      return;
    } else {
      setCountCart(0);
    }
  }, []);
  const updateDataCart = useCallback(() => {
    const localData = localStorage.getItem("cart");
    if (localData) {
      const parseData = JSON.parse(localData);
      setDataCart(parseData);
    }
  }, []);
  useEffect(() => {
    updateCountWrapepr();
    updateDataCart();
  }, [updateCountWrapepr, updateDataCart]);

  return (
    <>
      <CartContext.Provider value={val}>{children}</CartContext.Provider>
    </>
  );
};
