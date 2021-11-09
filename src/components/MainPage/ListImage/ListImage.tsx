import React, { useState } from "react";
import image1 from "../../../img/list/1.png";
import image2 from "../../../img/list/2.png";
import image3 from "../../../img/list/3.png";
import image4 from "../../../img/list/4.png";
import image5 from "../../../img/list/5.png";
import image6 from "../../../img/list/6.png";
import "./listimage.sass";
interface IDataItem {
  id: number;
  image: any;
  h3: string;
  p: string;
}
export const ListImage: React.FC = () => {
  const [dataItem] = useState<IDataItem[]>([
    {
      id: 0,
      image: image1,
      h3: "Гнучкий робочий графік",
      p: "Ви працюєте, коли хочете і де хочете. Компанія працює у всіх країнах світу.",
    },
    {
      id: 1,
      image: image2,
      h3: "Подорожі та насичене життя",
      p: "Компанія проводить різні цікаві заходи, навчання і тренінги. Ваша структура буде розвиватися по всьому світу.",
    },
    {
      id: 2,
      image: image3,
      h3: "Спілкування з цікавими людьми",
      p: "Ви постійно будете зустрічати нових людей, яких об'єднує прагнення домагатися успіху.",
    },
    {
      id: 3,
      image: image4,
      h3: "Необмежений дохід і відсутність ризику",
      p: "Всі ризики бере на себе Компанія. Кожне бізнес-місце  може приносити до 200 000 доларів в місяць. Кількість місць не обмежена.",
    },
    {
      id: 4,
      image: image5,
      h3: "Визнання",
      p: `Досягаючи результатів, Ви будете рухатися кар'єрними сходами, отримувати привітання на "великих сценах", отримувати подарунки і бути наставником для багатьох людей.`,
    },
    {
      id: 5,
      image: image6,
      h3: "Нерухомість",
      p: `Програма нерухомості забезпечить Вам можливість переїхати в новий будинок або квартиру вже в цьому році.`,
    },
  ]);
  return (
    <div className="list-image-wrapper">
      <div className="top-line">
        <h2 className="h2">Переваги співпраці з Lotus</h2>
      </div>
      <div className="list-wrapper-main">
        <div className="container-list">
          {dataItem.map((e, i) => (
            <div className="item-list-wrapper" key={i}>
              <div className="image-container">
                <div className="image-wrapper">
                  <img src={e.image} alt="" />
                </div>
              </div>
              <h3 className="h3">{e.h3}</h3>
              <p>{e.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
