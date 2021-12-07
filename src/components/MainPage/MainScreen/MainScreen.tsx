import React from "react";
import "./mainscreen.sass";
import downRight from "../../../img/down-right.png";
import { useHistory } from "react-router";
export const MainScreeen: React.FC = () => {
  const history = useHistory();

  return (
    <div className="main-screen-wrapper">
      <div className="container-image">
        <div className="text-main-collection">
          <h1 className="h1">Клуб здоров’я - Lotus</h1>
          <p className="text-main-wrapper">
            Ми віримо в підтримку цілісного, здорового способу життя. Дбайте про
            близьких та будуйте свій бізнес разом з нами!
          </p>
          <div className="btn-main-screen-wrapper">
            <div
              className="btn-main-collection green-btn"
              onClick={() => {
                history.push("/login");
              }}
            >
              <span>Приєднатись</span>
            </div>
            <div className="btn-main-collection light-btn">
              <span onClick={() => history.push("/shop")}>
                Дивитись продукцію
              </span>
              <img src={downRight} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
