import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import image1 from "../../../../img/iconCabinet/IconNavLink/1.png";
import image2 from "../../../../img/iconCabinet/IconNavLink/2.png";
import image3 from "../../../../img/iconCabinet/IconNavLink/3.png";
import image4 from "../../../../img/iconCabinet/IconNavLink/4.png";
import image5 from "../../../../img/iconCabinet/IconNavLink/5.png";
import right from "../../../../img/iconCabinet/IconNavLink/right.png";
import { getDataUser } from "../../../api/user";
interface IDataUserNavLink {
  email: string;
  phone: string;
}
export const MainCabinetLink: React.FC = () => {
  const [dataUser, setDataUser] = useState<IDataUserNavLink>({
    email: "",
    phone: "",
  });
  useEffect(() => {
    getDataUser()
      .then((res) => {
        if (res) {
          setDataUser(res.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const history = useHistory();
  const pushHistory = (page: string) => {
    history.push(page);
  };
  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <div className="main-cabinet-nav-link">
      <div className="log-out-container">
        <div className="btn-log-out" onClick={logOut}>
          <span>Вийти з кабінету</span>
        </div>
      </div>
      <div className="main-link-container">
        <div
          className="item-link-wrapper"
          onClick={() => {
            pushHistory("/cabinet/business");
          }}
        >
          <div className="top-line-link">
            <div className="name-image-wrapper">
              <img src={image1} alt="" />
              <p>Мій Бізнес</p>
            </div>
            <div className="arrow-wrapper">
              <img src={right} alt="" />
            </div>
          </div>
          <div className="inform-link-wrapper">
            <p>Дані про виплати оновлюються раз на місяць</p>
          </div>
        </div>
        <div
          className="item-link-wrapper"
          onClick={() => {
            pushHistory("/cabinet/structure");
          }}
        >
          <div className="top-line-link">
            <div className="name-image-wrapper">
              <img src={image2} alt="" />
              <p>Моя Структура</p>
            </div>
            <div className="arrow-wrapper">
              <img src={right} alt="" />
            </div>
          </div>
          <div className="inform-link-wrapper">
            <p>Дані про виплати оновлюються раз на місяць</p>
          </div>
        </div>
        <div
          className="item-link-wrapper"
          onClick={() => {
            pushHistory("/cabinet/bonus");
          }}
        >
          <div className="top-line-link">
            <div className="name-image-wrapper">
              <img src={image3} alt="" />
              <p>Мої Бонуси</p>
            </div>
            <div className="arrow-wrapper">
              <img src={right} alt="" />
            </div>
          </div>
          <div className="inform-link-wrapper">
            <div className="bonus-wrapper">
              <span>Бонусів:</span> <span>2 000 Lt</span>
            </div>
            <div className="dops-inform">
              <p>(за попередній період)</p>
            </div>
          </div>
        </div>
        <div className="item-link-wrapper">
          <div className="top-line-link">
            <div className="name-image-wrapper">
              <img src={image4} alt="" />
              <p>Моє Навчання</p>
            </div>
            <div className="arrow-wrapper">
              <img src={right} alt="" />
            </div>
          </div>
          <div className="inform-link-wrapper">
            <div className="lessons-wrapper">
              <span>Кількість заходів:</span>
              <span>14</span>
            </div>
            <div className="dops-inform">
              <p>(за попередній період)</p>
            </div>
          </div>
        </div>
        <div
          className="item-link-wrapper"
          onClick={() => {
            pushHistory("/cabinet/profile");
          }}
        >
          <div className="top-line-link">
            <div className="name-image-wrapper">
              <img src={image5} alt="" />
              <p>Мій профіль</p>
            </div>
            <div className="arrow-wrapper">
              <img src={right} alt="" />
            </div>
          </div>
          <div className="inform-link-wrapper">
            <div className="setting-wrapper">
              <span>E-mail:</span>
              <span>{dataUser.email}</span>
            </div>
            <div className="setting-wrapper">
              <span>Tel:</span>
              <span>{dataUser.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
