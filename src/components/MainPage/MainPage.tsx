import React from "react";
import { ActualProducts } from "./ActualProdutcs/ActualProducts";
import { AuthSection } from "./AuthSection/AuthSection";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { ListCategory } from "./ListCategory/ListCategory";
import { ListImage } from "./ListImage/ListImage";
import { MainScreeen } from "./MainScreen/MainScreen";
import { MiniShop } from "./MiniShop/MiniShop";
import { NewProducts } from "./NewProduct/NewProducts";
//import { SectionImage } from "./SectioImage/SectionImage";
import { SupportSection } from "./SupportSection/SupportSection";
import { TextComposition } from "./TextComposition/TextComposition";

export const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <Header />
      <MainScreeen />
      <ActualProducts />
      <ListCategory />
      <MiniShop />
      <NewProducts />
      <AuthSection />
      <ListImage />
      <TextComposition />
      <SupportSection />
      <Footer />
    </div>
  );
};
