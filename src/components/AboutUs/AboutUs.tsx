import React from "react";
import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
import "./aboutus.sass";
import aboutBg from "../../img/aboutUs.png";
import geo from "../../img/geoLocation.png";
import { AuthSection } from "../MainPage/AuthSection/AuthSection";
export const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <div className="about-us-wrapper">
        <div className="main-wrapper-about">
          <div className="image-wrapper">
            <img src={aboutBg} alt="" />
          </div>
          <div className="text-composition">
            <h1 className="h1">Повна назва компанії</h1>
            <p className="text-wrapper">
              Опис: Ми віримо в підтримку цілісного, здорового способу життя.
              Дбайте про близьких та будуйте свій бізнес разом з нами!
            </p>
            <div className="btn-wrapper">
              <div className="btn-auth-about">
                <span>Приєднатись</span>
              </div>
              <div className="btn-wrapper-more">
                <span>Детальніше</span>
              </div>
              <div className="geo-text-wrapper">
                <img src={geo} alt="" />
                <p> Головний офіс: Адреса, яка переходить на мапу гугл</p>
              </div>
            </div>
          </div>
        </div>
        <AuthSection />
      </div>
      <Footer />
    </>
  );
};
