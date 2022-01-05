import React from "react";
import { Link } from "react-router-dom";
import "./bonuspage.sass";
import image1 from "../../../img/iconCabinet/IconBonus/1.png";
import image2 from "../../../img/iconCabinet/IconBonus/2.png";
import image3 from "../../../img/iconCabinet/IconBonus/3.png";
import image4 from "../../../img/iconCabinet/IconBonus/4.png";
import image5 from "../../../img/iconCabinet/IconBonus/5.png";
import image8 from "../../../img/iconCabinet/IconBonus/8.png";
import image9 from "../../../img/iconCabinet/IconBonus/9.png";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";

export const BonusPage: React.FC = () => {
  const dataUser = useSelector((state: RootState) => state.cabinet.dataUser);
  return (
    <div className="bonus-page-wrapper">
      <div className="link-wrapper-navigation">
        <div className="container-navigatin-link">
          <Link to="/cabinet/home" className="main-link-navigation">
            Головна
          </Link>
          <span>/</span>
          <Link to="/cabinet/business" className="active-link">
            Мої бонуси
          </Link>
        </div>
      </div>
      <div className="bonus-wrapper-container">
        <div className="top-line-wrapper-bonus">
          <h1 className="h1">Мої бонуси</h1>
        </div>
        <div className="container-block-bonus">
          <div className="inform-active-bonus">
            <div className="top-line-wrapper">
              <p>Нараховані бонуси</p>
            </div>
            <div className="container-list-wrapepr">
              <div className="list-wrapper-main">
                <div className="image-wrapper">
                  <img src={image1} alt="" />
                </div>
                <div className="text-wrapper">
                  <p>
                    Бонуси за попередній період: {dataUser.bonusBalance} Lot
                  </p>
                </div>
              </div>
              <div className="list-wrapper-main">
                <div className="image-wrapper">
                  <img src={image2} alt="" />
                </div>
                <div className="text-wrapper">
                  <p>
                    Бонуси по програмі виплат:{" "}
                    {dataUser.bonusBalance - dataUser.refBonus} Lot
                  </p>
                </div>
              </div>
              <div className="list-wrapper-main">
                <div className="image-wrapper">
                  <img src={image3} alt="" />
                </div>
                <div className="text-wrapper">
                  <p>Бонуси за закриті гілки: 0 Lot</p>
                </div>
              </div>
              <div className="list-wrapper-main">
                <div className="image-wrapper">
                  <img src={image4} alt="" />
                </div>
                <div className="text-wrapper">
                  <p>Об’єм рекрутерської винагороди: {dataUser.refBonus} Lot</p>
                </div>
              </div>
            </div>
          </div>
          <div className="send-bonus-wrapper">
            <div className="top-line-wrapper">
              <p>Нараховані бонуси</p>
              <span>
                Введіть унікальний ID користувача, якому робите переказ та суму
                переказу
              </span>
            </div>
            <div className="input-collection-wrapper">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="id"
                  placeholder="ID отримувача"
                  required
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="balance"
                  placeholder="00 Lt"
                  required
                />
              </div>
              <div className="btn-wrapper-main">
                <span>Зробити переказ</span>
              </div>
              <div className="link-story-send">
                <span>Дивитись історію переказів</span>
              </div>
            </div>
          </div>
          <div className="inform-structure-wrapper-last">
            <div className="top-line-wrapper">
              <p>Кількість гілок</p>
            </div>
            <div className="container-list-wrapepr">
              <div className="list-wrapper-main">
                <div className="image-wrapper">
                  <img src={image5} alt="" />
                </div>
                <div className="text-wrapper">
                  <p>Закриті гілки: Не нараховано</p>
                </div>
              </div>
              <div className="list-wrapper-main">
                <div className="image-wrapper">
                  <img src={image8} alt="" />
                </div>
                <div className="text-wrapper">
                  <p>Необхідно закрити для отримання бонусу: Не нараховано</p>
                </div>
              </div>
              <div className="list-wrapper-main">
                <div className="image-wrapper">
                  <img src={image9} alt="" />
                </div>
                <div className="text-wrapper">
                  <p>Відсоток розподілу коштів на рахунок: Не нараховано</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
