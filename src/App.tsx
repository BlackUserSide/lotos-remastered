import React from "react";
import { MainRoutes } from "./routes/MainRouter";
import "./components/ui/anim.css";
import { RoutesContext } from "./routes/RoutesContext";
import { useRoutes } from "./routes/useRoutes";
import "./main.sass";
import "./font/Gilroy.css";
import { CartComponentContext } from "./components/CartContext/CartComponentContext";
import { OrderContextComponent } from "./components/CartPage/ContextOrder/OrderContextComponent";
export const App: React.FC = () => {
  return (
    <div className="main-app-wrapper">
      <CartComponentContext>
        <OrderContextComponent>
          <RoutesContext.Provider value={useRoutes}>
            <MainRoutes />
          </RoutesContext.Provider>
        </OrderContextComponent>
      </CartComponentContext>
    </div>
  );
};
