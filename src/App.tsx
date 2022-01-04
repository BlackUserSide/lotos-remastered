import React, { useEffect } from "react";
import { MainRoutes } from "./routes/MainRouter";
import "./components/ui/anim.css";
import { RoutesContext } from "./routes/RoutesContext";
import { useRoutes } from "./routes/useRoutes";
import "./main.sass";
import "./font/Gilroy.css";
import { OrderContextComponent } from "./components/CartPage/ContextOrder/OrderContextComponent";
import { useDispatch, useSelector } from "react-redux";
import { getDataCart } from "./redux/Cart/actionsCart";
import { saveUserData } from "./redux/Cabinet/action";
import { RootState } from "./redux/rootReducer";
import { getProductsWrapper } from "./redux/Shop/action";
//import { FormCallBack } from "./components/ui/FormCallback/FormCallback";
export const App: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.cabinet.auth);

  useEffect(() => {
    dispatch(saveUserData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getDataCart());
  }, [auth, dispatch]);
  useEffect(() => {
    dispatch(getProductsWrapper());
  }, [dispatch]);
  return (
    <>
      <div className="main-app-wrapper">
        <OrderContextComponent>
          <RoutesContext.Provider value={useRoutes}>
            <MainRoutes />
          </RoutesContext.Provider>
        </OrderContextComponent>
      </div>

      {/* {activeCall ? <FormCallBack changeHandler={changeHandler} /> : ""} */}
    </>
  );
};
