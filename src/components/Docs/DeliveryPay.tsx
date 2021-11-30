import React from "react";
import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
import "./deliveryDoc.sass";
export const DeliveryPay: React.FC = () => {
  return (
    <>
      <Header />
      <div className="deliver-pay">
        <h1 className="h1">Доставка, оплата та повернення товару</h1>
        <h2 className="h2">Cпособи доставки</h2>
        <p>
          Ми подбали про те, щоб доставка замовлення була максимально простою та
          зручною. Зверніть увагу доставка через кур’єрські компанії є платною.
          Отримання замовлення відбувається з пунктів видачі компанії, або через
          кур’єрську компанію (Нова пошта, УкрПошта) Доставка кур’єрськими
          службами відбувається згідно тарифів та термінів відповідної служби.
          Більш детально можна ознайомитись на сайті компанії Нова
          Пошта(http://surl.li/avcrl) УкрПошта(http://surl.li/avcrg)
        </p>
        <h2>Оплата</h2>
        <p>
          Оплата здійснюється виключно на сайті через платіжну систему Liqpay.
          Зверніть увагу передача даних здійснюється захищеним каналом із
          застосуванням сучасних методів шифрування, при цьому виключається
          будь-яка можливість перехоплення конфіденційної інформації.{" "}
        </p>
        <h2>Умови повернення товару.</h2>
        <p>
          Повернення продукції належної якості відбувається згідно законодавства
          України протягом 14 днів. Компанія Lotus-namaste ретельно перевіряє
          якість та комплектацію кожного замовлення, тому Ви не можете отримати
          товар неналежної якості. Якщо Ви отримали пошкоджений товар, або
          замовлення в не повному обсязі, будь ласка, відмовтесь від замовлення
          за складіть відповідний акт у відділенні кур’єрської компанії. Більш
          детально з умовами повернення товару можна ознайомитись за
          посиланням(http://surl.li/dypt)
        </p>
      </div>
      <Footer />
    </>
  );
};
