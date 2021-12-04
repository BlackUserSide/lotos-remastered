import React, { useState } from "react";
import { MainRoutes } from "./routes/MainRouter";
import "./components/ui/anim.css";
import { RoutesContext } from "./routes/RoutesContext";
import { useRoutes } from "./routes/useRoutes";
import "./main.sass";
import "./font/Gilroy.css";
import { CartComponentContext } from "./components/CartContext/CartComponentContext";
import { OrderContextComponent } from "./components/CartPage/ContextOrder/OrderContextComponent";
import { FormCallBack } from "./components/ui/FormCallback/FormCallback";
import phoneImage from "./img/phone-call.png";
export const App: React.FC = () => {
  const [activeCall, setActiveCall] = useState<boolean>(false);
  const changeHandler = () => {
    if (activeCall) {
      setActiveCall(false);
      return;
    }
    setActiveCall(true);
  };
  return (
    <>
      <div className="main-app-wrapper">
        <CartComponentContext>
          <OrderContextComponent>
            <RoutesContext.Provider value={useRoutes}>
              <MainRoutes />
            </RoutesContext.Provider>
          </OrderContextComponent>
        </CartComponentContext>
      </div>
      <div className="btn-active-callback" onClick={changeHandler}>
        <img src={phoneImage} alt="" />
      </div>
      {activeCall ? <FormCallBack changeHandler={changeHandler} /> : ""}
    </>
  );
};
