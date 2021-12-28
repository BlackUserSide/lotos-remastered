import React from "react";
import { Link } from "react-router-dom";
import "./businmesspage.sass";
import image1 from "../../../img/iconCabinet/iconBusiness/1/1.png";
import image2 from "../../../img/iconCabinet/iconBusiness/1/2.png";
import image3 from "../../../img/iconCabinet/iconBusiness/1/3.png";
import image4 from "../../../img/iconCabinet/iconBusiness/1/4.png";
import image5 from "../../../img/iconCabinet/iconBusiness/1/5.png";
import image6 from "../../../img/iconCabinet/iconBusiness/1/6.png";
import image7 from "../../../img/iconCabinet/iconBusiness/1/7.png";
import image8 from "../../../img/iconCabinet/iconBusiness/1/8.png";
import image9 from "../../../img/iconCabinet/iconBusiness/1/9.png";
import image10 from "../../../img/iconCabinet/iconBusiness/1/10.png";
import image11 from "../../../img/iconCabinet/iconBusiness/1/11.png";
import image12 from "../../../img/iconCabinet/iconBusiness/1/12.png";
import image13 from "../../../img/iconCabinet/iconBusiness/1/13.png";
import image14 from "../../../img/iconCabinet/iconBusiness/1/14.png";
import { useDispatch } from "react-redux";
import { getCounterStructure } from "../../../redux/Cabinet/action";
export const BusinessPage: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="business-page-wrapper">
      <div className="link-wrapper-navigation">
        <div className="container-navigatin-link">
          <Link to="/cabinet/home" className="main-link-navigation">
            Головна
          </Link>
          <span>/</span>
          <Link to="/cabinet/business" className="active-link">
            Мій бізнес
          </Link>
        </div>
      </div>
      <div className="top-line-wrapper-business">
        <h1 className="h1">Мій бізнес</h1>
        <div
          className="btn-update-data-count"
          onClick={() => dispatch(getCounterStructure())}
        >
          <span>Оновити</span>
        </div>
      </div>
      <div className="inform-business-wrapper">
        <div className="container-item-business">
          <div className="item-wrapper-business">
            <div className="top-line-wrapper">
              <p>Обсяг обороту та гілки у структурі</p>
            </div>
            <div className="list-wrapper-business">
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image1} alt="" />
                </div>
                <p>
                  ОС: <span>Не розраховано</span>
                </p>
              </div>
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image2} alt="" />
                </div>
                <p>
                  Загальна кількість гілок: <span>Не розраховано</span>
                </p>
              </div>
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image3} alt="" />
                </div>
                <p>
                  Гілки з обсягом {">"} 40 000 <span>Не розраховано</span>
                </p>
              </div>
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image4} alt="" />
                </div>
                <p>
                  Гілки з обсягом {"<"} 40 000: <span>Не розраховано</span>
                </p>
              </div>
            </div>
          </div>
          <div className="item-wrapper-business">
            <div className="top-line-wrapper">
              <p>Нараховані бонуси</p>
            </div>
            <div className="list-wrapper-business">
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image5} alt="" />
                </div>
                <p>
                  Загальна кількість бонусів: <span>Не розраховано</span>
                </p>
              </div>
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image6} alt="" />
                </div>
                <p>
                  Бонуси по програмі виплат: <span>Не розраховано</span>
                </p>
              </div>
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image7} alt="" />
                </div>
                <p>
                  Бонуси за закриті гілки: <span>Не розраховано</span>
                </p>
              </div>
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image8} alt="" />
                </div>
                <p>
                  Об’єм рекрутерської винагороди: <span>Не розраховано</span>
                </p>
              </div>
            </div>
          </div>
          <div className="item-wrapper-business">
            <div className="top-line-wrapper">
              <p>Кількість ліній у структурі</p>
            </div>
            <div className="list-wrapper-business">
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image9} alt="" />
                </div>
                <p>
                  Загальна кількість ліній: <span>Не розраховано</span>
                </p>
              </div>
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image10} alt="" />
                </div>
                <p>
                  Ліній відкрито: <span>Не розраховано</span>
                </p>
              </div>
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image11} alt="" />
                </div>
                <p>
                  Доступно для нарахування бонусів: <span>Не розраховано</span>
                </p>
              </div>
            </div>
          </div>
          <div className="item-wrapper-business">
            <div className="top-line-wrapper">
              <p>Обсяг людей в структурі</p>
            </div>
            <div className="list-wrapper-business">
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image12} alt="" />
                </div>
                <p>
                  Людей в структурі: <span>Не розраховано</span>
                </p>
              </div>
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image13} alt="" />
                </div>
                <p>
                  Запрошено вами <span>Не розраховано</span>
                </p>
              </div>
              <div className="item-list-business">
                <div className="image-wrapper">
                  <img src={image14} alt="" />
                </div>
                <p>
                  Запрошено за попередній період: <span>Не розраховано</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
