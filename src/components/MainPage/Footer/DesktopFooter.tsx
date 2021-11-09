import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/LogoFooter.png";
export const DesktopFooter: React.FC = () => {
  return (
    <div className="desktop-footer">
      <div className="logo-wrapper">
        <img src={logo} alt="" />
        <span>© 2021 Lotus</span>
        <Link to={"#"}>Політика конфіденційності</Link>
      </div>
      <nav className="list-nav-wrapper">
        <ul>
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/#">Про компанію</Link>
          </li>
          <li>
            <Link to="/#">Рекомендації щодо лікування</Link>
          </li>
          <li>
            <Link to="/#">Магазин</Link>
          </li>
          <li>
            <Link to="/#">Технології виготовлення</Link>
          </li>
          <li>
            <Link to="/#">Особистий кабінет</Link>
          </li>
        </ul>
      </nav>
      <div className="btn-main-auth-footer">
        <span>Авторизуватись</span>
      </div>
    </div>
  );
};
