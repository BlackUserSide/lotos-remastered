import React, { useCallback, useContext, useEffect, useState } from "react";
import { getCartProducts } from "../../api/shop";
import { CartContext, TDataCart } from "../../CartContext/CartContext";
import { ContextOrder } from "../ContextOrder/ContextOrder";
import { IOrderCartMain } from "../type";
import { ItemCartMain } from "./ItemCartMain";
import deleteICO from "../../../img/iconCart/delete-white.png";
import { HeaderCart } from "../HeaderCart/HeaderCart";
import { useHistory } from "react-router";
export const MainCart: React.FC = () => {
  const history = useHistory();
  const [dataCarts, setDataCarts] = useState<TDataCart[]>([]);
  const [mainCart, setMainCart] = useState<IOrderCartMain[]>([]);
  const { setFullPrices, fullPrice } = useContext(ContextOrder);
  const { dataCart, clearCart } = useContext(CartContext);
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
              setMainCart(res.data);
            }
          })
          .catch((err) => console.log(err));
      }
    }
    //setDataCart([]);
  }, []);
  const updateWrapper = useCallback(() => {
    if (dataCart) {
      setDataCarts(dataCart);
    }
  }, [dataCart]);
  useEffect(() => {
    updateWrapper();
  }, [updateWrapper]);

  useEffect(() => {
    updateDataCart();
  }, [updateDataCart]);
  useEffect(() => {
    if (dataCarts.length >= 1) {
      let tmpPrice = 0;
      dataCarts.map((e) => {
        const tmpProd = mainCart.find((k) => {
          return k.id === e.id;
        });
        if (tmpProd) {
          if (tmpProd?.discount !== null) {
            tmpPrice += e.amount * tmpProd.discount;
          } else {
            tmpPrice += e.amount * tmpProd.price;
          }
        }
        return e;
      });

      if (setFullPrices) {
        setFullPrices(tmpPrice);
      }
    }
  }, [dataCart, mainCart, setFullPrices, dataCarts]);

  return (
    <>
      <HeaderCart />
      <div className="main-cart-wrapper">
        <div className="container-cart-wrapper">
          {mainCart?.length >= 1 ? (
            mainCart.map((e, i) => (
              <ItemCartMain
                content={e}
                key={i}
                dataCart={dataCarts.find((k) => {
                  return k.id === e.id;
                })}
                updateDataCart={updateDataCart}
              />
            ))
          ) : (
            <>
              <h1 className="h1">Немає товару в кошику</h1>
            </>
          )}
        </div>
        {dataCarts.length >= 1 ? (
          <>
            <div className="cart-price-wrapper">
              <div className="container-price-wrapper">
                <div className="price-wrapper">
                  <p>Сума до сплати:</p>
                  <span>{fullPrice ? fullPrice : ""} грн</span>
                </div>
                <div
                  className="btn-wrapper-con-price"
                  onClick={() => {
                    history.push("/cart/delivery");
                  }}
                >
                  <span>Оформити замовлення</span>
                </div>
              </div>
            </div>
            {clearCart ? (
              <div
                className="btn-clear-delete-wrapper"
                onClick={() => clearCart()}
              >
                <img src={deleteICO} alt="" />
                <span>Очистити кошик</span>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
