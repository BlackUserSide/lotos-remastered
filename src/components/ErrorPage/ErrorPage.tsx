import React from "react";
import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
import { Prealoder } from "../ui/Preloader/Preloader";
import "./err.sass";
export const ErrorPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="err-page">
        <div className="container-err">
          <Prealoder />
          <h1 className="h1">Помилка 404: Не знайдено</h1>
          <p>Ми не змогли знайти цю сторінку, але ми працюємо над цим</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
