import React from "react";
import { ItemCartMain } from "./ItemCartMain";
import deleteICO from "../../../img/iconCart/delete-white.png";
import { HeaderCart } from "../HeaderCart/HeaderCart";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { clearCart } from "../../../redux/Cart/actionsCart";
import { Prealoder } from "../../ui/Preloader/Preloader";
import { PopUpAddSaleProducts } from "../../ui/PopUpAddSaleProducts/PopUpAddSaleProducts";
import { ItemCartGift } from "./ItemCartGift";
import { PopProdSale } from "../../ui/PopProdSale/PopProdSale";
import { ItemCartProdSaleMain } from "./ItemCartProdSaleMain";
// interface ISalesManage {
//   firstProcent: boolean;
//   secondProcent: boolean;
//   manSale: boolean;
//   lotusSale: boolean;
// }
export const MainCart: React.FC = () => {
  const history = useHistory();
  const dataCart = useSelector((state: RootState) => state.cart.dataCart);
  const dispatch = useDispatch();
  const fullPrice = useSelector((state: RootState) => state.cart.fullPrice);
  const loader = useSelector((state: RootState) => state.cart.loader);
  const popUp = useSelector((state: RootState) => state.cart.popUpSale);
  const disable = useSelector((state: RootState) => state.cart.disablePopSale);
  const giftData = useSelector((state: RootState) => state.cart.saleItemGift);
  const popPropSale = useSelector((state: RootState) => state.cart.prodPopSale);
  const disableProd = useSelector(
    (state: RootState) => state.cart.disablePopProdSale
  );

  const prodSale = useSelector((state: RootState) => state.cart.prodSale);
  return (
    <>
      <HeaderCart />
      <div className="main-cart-wrapper">
        {loader ? (
          <Prealoder />
        ) : (
          <>
            <div className="container-cart-wrapper">
              {dataCart.length >= 1 ? (
                <>
                  {dataCart.map((e, i) => (
                    <ItemCartMain
                      content={e}
                      key={i}
                      dataCart={dataCart.find((k) => {
                        return k.id === e.id;
                      })}
                    />
                  ))}
                  {giftData.map((e, i) => (
                    <ItemCartGift content={e} key={i} />
                  ))}
                  {prodSale.map((e, i) => (
                    <ItemCartProdSaleMain content={e} key={i} />
                  ))}
                </>
              ) : (
                <>
                  <h1 className="h1">Немає товару в кошику</h1>
                </>
              )}
            </div>
            {dataCart.length >= 1 ? (
              <>
                <div className="cart-price-wrapper">
                  <div className="container-price-wrapper">
                    <div className="price-wrapper">
                      <p>Сума до сплати:</p>
                      <span>{fullPrice} грн</span>
                    </div>
                    {/* <div className="price-wrapper">
                  <p>Сума до знижки:</p>
                  <span>{fullPrice ? fullPrice : ""} грн</span>
                </div> */}
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
                    {/* {dataSales.firstProcent ? (
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
                )} */}
                  </div>
                </div>
                <div
                  className="btn-clear-delete-wrapper"
                  onClick={() => dispatch(clearCart())}
                >
                  <img src={deleteICO} alt="" />
                  <span>Очистити кошик</span>
                </div>

                <div
                  className="btn-back-to-shop"
                  onClick={() => history.push("/shop")}
                >
                  <span>Продовжити покупки</span>
                </div>
              </>
            ) : (
              ""
            )}
          </>
        )}
      </div>
      {/* {activePopSale !== 0 ? (
        <PopUpSale
          contentSale={activePopSale}
          setActivePopSale={setActivePopSale}
        />
      ) : (
        ""
      )} */}
      {disable ? "" : popUp ? <PopUpAddSaleProducts /> : ""}
      {disableProd ? "" : popPropSale ? <PopProdSale /> : ""}
    </>
  );
};
