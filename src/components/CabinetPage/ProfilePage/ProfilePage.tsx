import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./profilepage.sass";
import image1 from "../../../img/iconCabinet/iconProfile/1.png";
//import image2 from "../../../img/iconCabinet/iconProfile/2.png";
import image3 from "../../../img/iconCabinet/iconProfile/3.png";
import image4 from "../../../img/iconCabinet/iconProfile/4.png";
import { getDataUser } from "../../api/user";
import { IDataProfile } from "./type";
import { useHistory } from "react-router";
export const ProfilePage: React.FC = () => {
  let history = useHistory();
  const [dataUser, setDataUser] = useState<IDataProfile>({
    firstName: "",
    lastName: "",
    surname: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    getDataUser()
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 200:
              setDataUser(res.data[0]);
              break;
            case 401:
              localStorage.clear();
              history.push("/login");
          }
        }
      })
      .catch((err) => console.log(err));
  }, [history]);
  return (
    <div className="profile-page">
      <div className="link-wrapper-navigation">
        <div className="container-navigatin-link">
          <Link to="/cabinet/home" className="main-link-navigation">
            Головна
          </Link>
          <span>/</span>
          <Link to="/cabinet/profile" className="active-link">
            Мій профіль
          </Link>
        </div>
      </div>
      <div className="top-line-wrapper-profile">
        <h1 className="h1">Мій профіль</h1>
      </div>
      <div className="profile-main-wrapper">
        <div className="container-profile-section">
          <div className="first-section-profile">
            <div className="top-line-wrapper">
              <p>Особисті дані</p>
            </div>
            <div className="list-wrapper-profile">
              <div className="list-item">
                <div className="image-wrapper">
                  <img src={image1} alt="" />
                </div>
                <div className="text-compose">
                  <p>{`${dataUser.surname} ${dataUser.firstName} ${dataUser.lastName}`}</p>
                </div>
              </div>
              {/* <div className="list-item">
                <div className="image-wrapper">
                  <img src={image2} alt="" />
                </div>
                <div className="text-compose">
                  <p>20.05.1991 р.</p>
                </div>
              </div> */}
              <div className="list-item">
                <div className="image-wrapper">
                  <img src={image3} alt="" />
                </div>
                <div className="text-compose">
                  <p>{dataUser.phone}</p>
                </div>
              </div>
              <div className="list-item">
                <div className="image-wrapper">
                  <img src={image4} alt="" />
                </div>
                <div className="text-compose">
                  <p>{dataUser.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="second-wrapper-profile">
            <div className="top-line-wrapper">
              <p>Особисті дані</p>
              <span>Вкажіть вашу адресу для доставки за замовчуванням.</span>
            </div>
            <div className="input-container">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="city"
                  placeholder="Введіть населений пункт"
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="numberPost"
                  placeholder="Введіть номер відділення Нової пошти"
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="address"
                  placeholder="Введіть вашу адресу (індекс, вул, дім, квартира) "
                />
              </div>
            </div>
            <div className="btn-wrapper-profile">
              <span>Зберегти нову адресу</span>
            </div>
          </div>
        </div>
        <div className="story-shop-order-wrapper">
          <div className="top-line">
            <p>Мої замовлення</p>
            <span>Дивитись історію замовлень</span>
          </div>
          <div className="container-content-shop-order">
            <div className="content-shop-wrapper">
              <table>
                {/* <thead>
                  <tr>
                    <th>Номер замовлення</th>
                    <th>Дата</th>
                    <th>Ціна</th>
                    <th>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2021-08-17</td>
                    <td>2 002 грн.</td>
                    <td>Доставляється</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2021-05-17</td>
                    <td>2 002 грн.</td>
                    <td>Доставлено</td>
                  </tr>
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
