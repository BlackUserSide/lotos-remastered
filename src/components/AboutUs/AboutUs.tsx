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
              про здоров’я близьких та своє здоров’я! Наша продукція
              поставляється з заводу "Наноформація" що виробляє продукцію за
              унікальною технологією та по нашому спеціальному замовленню!
              Технологія була запатентована ще в 1990-их роках. Унікальність
              технології складається в тому, що при температурі 36 градусів
              цельсія з рослинної сировини дістається клітинна рідина, не
              ламаючи структуру клітин, у якій містяться всі корисні макро- та
              мікроелементи. Продукція що представлена на сайті є найкращою з
              тих, що виробляє підприємство. Наразі ми можемо представити Вам
              препарати з наступних категорій : Комплекс для нервової системи;
              Комплекс для опорно-рухової системи; Комплекс для дихальної
              системи; Комплекс для сечовивідної системи; Комплекс системної
              дії; Комплекс для серцево-судинної системи; Комплекс для зорової
              системи; Комплекс для імунної системи; Комплекс для травної
              системи; Комплекс для эндокринної системы. Надалі асортимент
              продукції буде розширюватись та поповнюватись товарами для тварин,
              добривами для рослин, товарами для краси, лінійкою товарів
              побутового призначення та інші. Ми намагаємося бути кращими для
              Вас!
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
