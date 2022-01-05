import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoryAction } from "../../redux/Shop/action";
import { AuthSection } from "../MainPage/AuthSection/AuthSection";
import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
import { CategoryWrapper } from "./CategoryWrapper/CategoryWrapper";
import { MainShop } from "./MainShop/MainShop";
import "./shop.sass";
import { ShopComponentContext } from "./ShopContext/ShopComponentContext";
import { ShopWrapper } from "./ShopWrapper/ShopWrapper";
export const ShopPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryAction());
  }, [dispatch]);
  return (
    <div className="shop-page-wrapper">
      <Header />
      <ShopComponentContext>
        <div className="main-wrapper-shop">
          <CategoryWrapper />
          <MainShop />
        </div>
        <ShopWrapper />
        <AuthSection />
        <Footer />
      </ShopComponentContext>
    </div>
  );
};
