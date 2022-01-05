import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import image1 from "../../../../img/iconCabinet/IconNavLink/1.png";
import image2 from "../../../../img/iconCabinet/IconNavLink/2.png";
import image3 from "../../../../img/iconCabinet/IconNavLink/3.png";
import image4 from "../../../../img/iconCabinet/IconNavLink/4.png";
import image5 from "../../../../img/iconCabinet/IconNavLink/5.png";
import right from "../../../../img/iconCabinet/IconNavLink/right.png";
import { goDownPage } from "../../../../redux/Cabinet/action";
import { RootState } from "../../../../redux/rootReducer";
export const MainCabinetLink: React.FC = () => {
  const history = useHistory();
  const dataUser = useSelector((state: RootState) => state.cabinet.dataUser);

  const pushHistory = (page: string) => {
    history.push(page);
  };
  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  const dispatch = useDispatch();
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
            dispatch(goDownPage());
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
            dispatch(goDownPage());
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
            dispatch(goDownPage());
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
              <span>Бонусів:</span> <span>{dataUser.bonusBalance} Lot</span>
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
              <span>Сторінка не доступна</span>
              {/* <span>Кількість заходів:</span>
              <span>14</span> */}
            </div>
            {/* <div className="dops-inform">
              <p>(за попередній період)</p>
            </div> */}
          </div>
        </div>
        <div
          className="item-link-wrapper"
          onClick={() => {
            pushHistory("/cabinet/profile");
            dispatch(goDownPage());
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
