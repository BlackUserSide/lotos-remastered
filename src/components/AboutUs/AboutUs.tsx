import React from "react";
import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
import "./aboutus.sass";
import aboutBg from "../../img/aboutUs.png";
//import geo from "../../img/geoLocation.png";
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
            <h1 className="h1">LOTUS-NAMASTE</h1>
            <p className="text-wrapper">
              Ми віримо в підтримку цілісного, здорового способу життя. Дбайте
              про близьких та будуйте свій бізнес разом з нами! Наша продукція
              поставляється з заводу "Наноформація" за унікальним контрактом
              спеціально для того, щоб кожен знайшов відповідний засіб
            </p>
            <p className="text-wrapper">
              Зв'язатися з нами ви можете <br />
              Email: lotusnamste@gmail.com <br />
              Телефон: +380 99 168 8748
            </p>
            <div className="btn-wrapper">
              <div className="btn-auth-about">
                <span>Приєднатись</span>
              </div>
              <div className="btn-wrapper-more">
                <span>Детальніше</span>
              </div>
              {/* <div className="geo-text-wrapper">
                <img src={geo} alt="" />
                <p> Головний офіс: Україна,м. Харків, вул.Карповська 7</p>
              </div> */}
            </div>
          </div>
        </div>
        <AuthSection />
      </div>
      <Footer />
    </>
  );
};
