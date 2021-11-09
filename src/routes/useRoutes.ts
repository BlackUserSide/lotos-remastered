import { StructurePage } from "./../components/CabinetPage/StructurePage/StructurePage";
import { HomeCabinet } from "./../components/CabinetPage/HomeCabinet/HomeCabinet";
import { CabinetPage } from "./../components/CabinetPage/CabinetPage";
import { CardProduct } from "./../components/CardProduct/CardProduct";
import { AuthPage } from "./../components/AuthPage/AuthPage";
import { ShopPage } from "./../components/ShopPage/ShopPage";
import { MainPage } from "./../components/MainPage/MainPage";
import { TRoutesWrapper } from "./RoutesContext";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { BusinessPage } from "../components/CabinetPage/BusinessPage/BusinessPage";
export const useRoutes: TRoutesWrapper = {
  routes: [
    { path: "/", exact: true, component: MainPage, routes: [] },
    { path: "/shop", exact: false, component: ShopPage, routes: [] },
    { path: "/login", exact: false, component: AuthPage, routes: [] },
    { path: "/about-us", exact: false, component: AboutUs, routes: [] },
    {
      path: "/card-product/",
      exact: false,
      component: CardProduct,
      routes: [],
    },
    {
      path: "/cabinet/",
      exact: false,
      component: CabinetPage,
      routes: [
        {
          path: "/cabinet/home/",
          exact: false,
          component: HomeCabinet,
          routes: [],
        },
        {
          path: "/cabinet/business/",
          exact: false,
          component: BusinessPage,
          routes: [],
        },
        {
          path: "/cabinet/structure/",
          exact: false,
          component: StructurePage,
          routes: [],
        },
      ],
    },
  ],
};
