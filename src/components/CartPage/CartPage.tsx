import React, { useEffect } from "react";
import { Switch, useHistory } from "react-router";
import { RouteWithSubRoutes } from "../../routes/RouteWithSubRoutes";
//import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
import { OrderContextComponent } from "./ContextOrder/OrderContextComponent";
import "./cartpage.sass";
type IProms = {
  routes: any;
};
export const CartPage: React.FC<IProms> = ({ routes }) => {
  let history = useHistory();
  useEffect(() => {
    let dataPath = history.location.pathname.split("/");
    dataPath.shift();
    if (dataPath.length === 1) {
      history.push("/cart/main");
    }
  }, [history]);
  return (
    <>
      <Header />
      <OrderContextComponent>
        <div className="cart-wrapper-main">
          <Switch>
            {routes
              ? routes.map((route: any, i: any) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))
              : ""}
          </Switch>
        </div>
      </OrderContextComponent>

      {/* <Footer /> */}
    </>
  );
};
