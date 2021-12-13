import React, { useEffect } from "react";
import { Switch, useHistory } from "react-router";
import { RouteWithSubRoutes } from "../../routes/RouteWithSubRoutes";
//import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
import { MainCabinetLink } from "./HomeCabinet/MainCabinetLink/MainCabinetLink";
import { useDispatch } from "react-redux";
import { saveUserData } from "../../redux/Cabinet/action";
type IProms = {
  routes: any;
};
export const CabinetPage: React.FC<IProms> = ({ routes }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      let dataPath = history.location.pathname.split("/");
      dataPath.shift();
      if (dataPath.length === 1) {
        history.push("/cabinet/home");
      }
      dispatch(saveUserData());
    } else {
      history.push("/login");
    }
  }, [history, dispatch]);
  return (
    <>
      <Header />
      {localStorage.getItem("token") !== null ? (
        <div className="cabinet-wrapper-main">
          <MainCabinetLink />
          <Switch>
            {routes
              ? routes.map((route: any, i: any) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))
              : ""}
          </Switch>
        </div>
      ) : (
        ""
      )}
      {/* <Footer /> */}
    </>
  );
};
