import React from "react";
import { ActualProducts } from "./ActualProdutcs/ActualProducts";
import { AuthSection } from "./AuthSection/AuthSection";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { ListImage } from "./ListImage/ListImage";
import { MainScreeen } from "./MainScreen/MainScreen";
import { SectionImage } from "./SectioImage/SectionImage";
import { TextComposition } from "./TextComposition/TextComposition";

export const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <Header />
      <MainScreeen />
      <ActualProducts />
      <SectionImage />
      <AuthSection />
      <ListImage />
      <TextComposition />
      {/* <Footer /> */}
    </div>
  );
};
