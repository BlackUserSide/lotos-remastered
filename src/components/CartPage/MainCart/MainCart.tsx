import React, { useCallback, useContext, useEffect, useState } from "react";
import { getCartProducts } from "../../api/shop";
import { CartContext, TDataCart } from "../../CartContext/CartContext";
import { ContextOrder } from "../ContextOrder/ContextOrder";
import { IOrderCartMain } from "../type";
import { ItemCartMain } from "./ItemCartMain";
import deleteICO from "../../../img/iconCart/delete-white.png";
import { HeaderCart } from "../HeaderCart/HeaderCart";
import { useHistory } from "react-router";
import { getDataUser } from "../../api/user";
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
              console.log(res);

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
    getDataUser()
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 200:
              break;
            case 401:
              localStorage.removeItem("token");
              break;
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (dataCarts.length >= 1) {
      let tmpPrice = 0;
      dataCarts.map((e) => {
        const tmpProd = mainCart.find((k) => {
          return k.id === e.id;
        });

        const dataProdCart = dataCart?.find((t) => {
          return t.id === tmpProd?.id;
        });
        const localData = localStorage.getItem("token");
        if (tmpProd) {
          if (tmpProd?.discount !== null) {
            if (dataProdCart) {
              if (localData !== null) {
                if (dataProdCart.amount > 3) {
                  tmpPrice += e.amount * tmpProd.discount - tmpProd.price;
                } else {
                  tmpPrice += e.amount * tmpProd.discount;
                }
              } else {
                tmpPrice += e.amount * tmpProd.discount;
              }
            }
          } else {
            if (dataProdCart) {
              if (localData) {
                if (dataProdCart.amount > 3) {
                  tmpPrice += e.amount * tmpProd.price - tmpProd.price;
                } else {
                  tmpPrice += e.amount * tmpProd.price;
                }
              } else {
                tmpPrice += e.amount * tmpProd.price;
              }
            }
          }
        }
        return e;
      });

      if (setFullPrices) {
        const tmpLocal = localStorage.getItem("token");
        if (tmpLocal) {
          let newSum = 0;

          let tmpProcent = (tmpPrice * 10) / 100;
          newSum = tmpPrice - tmpProcent;

          setFullPrices(newSum);
        } else {
          setFullPrices(tmpPrice);
        }
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
