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
import { PopUpSale } from "../../ui/PopUpSale/PopUpSale";
interface ISalesManage {
  firstProcent: boolean;
  secondProcent: boolean;
  manSale: boolean;
  lotusSale: boolean;
}
export const MainCart: React.FC = () => {
  const history = useHistory();
  const [dataCarts, setDataCarts] = useState<TDataCart[]>([]);
  const [mainCart, setMainCart] = useState<IOrderCartMain[]>([]);
  const [activeSale, setActiveSale] = useState<number | null>(null);
  const { setFullPrices, fullPrice } = useContext(ContextOrder);
  const { dataCart, clearCart } = useContext(CartContext);
  //  const [activePop, setActivePop] = useState<boolean>(false);
  //const [saleProdName, setSaleProdName] = useState<string>("");
  const [dataSales, setDataSales] = useState<ISalesManage>({
    firstProcent: false,
    secondProcent: false,
    manSale: false,
    lotusSale: false,
  });
  const [activePopSale, setActivePopSale] = useState<number>(0);
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
                if (dataProdCart.amount >= 3) {
                  //setActivePop(true);
                  //setSaleProdName(tmpProd.name);
                }
                if (dataProdCart.amount > 3) {
                  if (activeSale !== null) {
                    tmpPrice +=
                      e.amount * tmpProd.discount - tmpProd.discount + 1;
                    setDataSales((prev) => ({
                      ...prev,
                      manSale: true,
                    }));
                    setActiveSale(e.id);
                  } else {
                    tmpPrice += e.amount * tmpProd.discount;
                  }
                } else {
                  if (activeSale === e.id) {
                    //setSaleProdName("");
                    setActiveSale(null);
                    setDataSales((prev) => ({
                      ...prev,
                      manSale: false,
                    }));
                  }
                  tmpPrice += e.amount * tmpProd.discount;
                }
              } else {
                tmpPrice += e.amount * tmpProd.discount;
              }
            }
          } else {
            if (dataProdCart) {
              if (localData) {
                if (dataProdCart.amount >= 3) {
                  //setActivePop(true);
                  //setSaleProdName(tmpProd.name);
                }
                if (dataProdCart.amount > 3) {
                  if (activeSale === null) {
                    tmpPrice += e.amount * tmpProd.price - tmpProd.price + 1; //TODO Поставить возврат 1 гривну

                    setDataSales((prev) => ({
                      ...prev,
                      manSale: true,
                    }));
                    setActiveSale(e.id);
                  } else {
                    if (activeSale === e.id) {
                      tmpPrice += e.amount * tmpProd.price - tmpProd.price + 1;
                    } else {
                      tmpPrice += e.amount * tmpProd.price;
                    }
                  }
                } else {
                  if (activeSale === e.id) {
                    setActiveSale(null);
                    //setSaleProdName("");
                    setDataSales((prev) => ({
                      ...prev,
                      manSale: false,
                    }));
                  }
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
          if (tmpPrice >= 1200) {
            setDataSales((prev) => ({
              ...prev,
              secondProcent: true,
            }));

            let tmpProcent = (tmpPrice * 20) / 100;
            newSum = Math.round(tmpPrice - tmpProcent);
          } else {
            setDataSales((prev) => ({
              ...prev,
              firstProcent: false,
              secondProcent: false,
              lotusSale: false,
            }));

            newSum = tmpPrice;
          }

          setFullPrices(newSum);
        } else {
          setFullPrices(tmpPrice);
        }
      }
    }
  }, [dataCart, mainCart, setFullPrices, dataCarts, activeSale]);

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
              <div className="sales-menage-wrapepr">
                {dataSales.firstProcent ? (
                  dataSales.secondProcent ? (
                    ""
                  ) : (
                    <p onClick={() => setActivePopSale(1)}>-10% активована</p>
                  )
                ) : (
                  ""
                )}
                {dataSales.secondProcent ? (
                  <p onClick={() => setActivePopSale(2)}>-20% активована</p>
                ) : (
                  ""
                )}
                {dataSales.manSale ? (
                  <p onClick={() => setActivePopSale(3)}>3+1 активована</p>
                ) : (
                  ""
                )}
                {dataSales.lotusSale ? (
                  <p onClick={() => setActivePopSale(4)}>
                    Фірмова акція Lotus-Namaste
                  </p>
                ) : (
                  ""
                )}
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
            <div
              className="btn-back-to-shop"
              onClick={() => history.push("/shop")}
            >
              <span>Повернутись до магазину</span>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {activePopSale !== 0 ? (
        <PopUpSale
          contentSale={activePopSale}
          setActivePopSale={setActivePopSale}
        />
      ) : (
        ""
      )}
    </>
  );
};
