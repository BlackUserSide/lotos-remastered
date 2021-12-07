import React, { useContext, useEffect } from "react";
import { Switch, useHistory } from "react-router";
import { RouteWithSubRoutes } from "../../routes/RouteWithSubRoutes";
//import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
import "./cartpage.sass";
import { ContextOrder } from "./ContextOrder/ContextOrder";
type IProms = {
  routes: any;
};
export const CartPage: React.FC<IProms> = ({ routes }) => {
  let history = useHistory();
  const { setDataCart, dataOrder } = useContext(ContextOrder);
  useEffect(() => {
    let dataPath = history.location.pathname.split("/");
    dataPath.shift();
    if (dataPath.length === 1) {
      history.push("/cart/main");
    }
  }, [history]);
  useEffect(() => {
    if (dataOrder?.dataCart.length === 0) {
      if (setDataCart) {
        setDataCart();
      }
    }
  }, [dataOrder, setDataCart]);
  return (
    <>
      <Header />

      <div className="cart-wrapper-main">
        <Switch>
          {routes
            ? routes.map((route: any, i: any) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))
            : ""}
        </Switch>
      </div>

      {/* <Footer /> */}
    </>
  );
};
