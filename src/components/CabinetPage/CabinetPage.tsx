import React, { useEffect, useRef } from "react";
import { Switch, useHistory } from "react-router";
import { RouteWithSubRoutes } from "../../routes/RouteWithSubRoutes";
//import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
import { MainCabinetLink } from "./HomeCabinet/MainCabinetLink/MainCabinetLink";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import "./cabinet.sass";
import { disableDownPage } from "../../redux/Cabinet/action";
type IProms = {
  routes: any;
};
export const CabinetPage: React.FC<IProms> = ({ routes }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.cabinet.auth);
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      let dataPath = history.location.pathname.split("/");
      dataPath.shift();
      if (dataPath.length === 1) {
        history.push("/cabinet/home");
      }
    } else {
      history.push("/login");
    }
  }, [history, dispatch]);
  const goDownPage = useSelector((state: RootState) => state.cabinet.goDown);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (goDownPage) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
    dispatch(disableDownPage());
  }, [goDownPage, dispatch]);
  if (auth) {
    return (
      <>
        <Header />
        {localStorage.getItem("token") !== null ? (
          <div className="cabinet-wrapper-main">
            <MainCabinetLink />
            <div ref={ref}></div>
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
  }
  return <Redirect to="/login" />;
};
