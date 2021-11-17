import React, { useContext } from "react";
import { RouteWithSubRoutes } from "./RouteWithSubRoutes";
import { Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { RoutesContext } from "./RoutesContext";
import { useLocation } from "react-router-dom";
export const MainRoutes = () => {
  const { routes } = useContext(RoutesContext);
  //console.log(process.env);
  let location = useLocation();
  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Switch location={location}>
            {routes
              ? routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))
              : ""}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
