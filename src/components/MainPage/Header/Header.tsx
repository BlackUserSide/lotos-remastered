import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/Logo.png";
import search from "../../../img/iconHeader/search.png";
import cart from "../../../img/iconHeader/cart.png";
import user from "../../../img/iconHeader/user.png";
import downup from "../../../img/down-up.png";
import uk from "../../../img/countries/uk.png";
import { useHistory } from "react-router";
import "./header.sass";
import "../../ui/hamburgers-master/dist/hamburgers.min.css";
export const Header: React.FC = () => {
  const history = useHistory();
  const pushHandler = (link: string) => {
    history.push(link);
  };
  const [activeMobile, setActiveMobile] = useState<boolean>(false);
  const changeActive = () => {
    if (activeMobile) {
      setActiveMobile(false);
      return;
    }
    setActiveMobile(true);
  };
  return (
    <>
      <header className="main-header-wrapper">
        <div className="container-wrapper">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav className="main-nav-wrapper">
            <ul className="main-container-nav">
              <li className="link-nav">
                <Link to="/">Головна</Link>
              </li>
              <li className="link-nav">
                <Link to="/shop">Магазин</Link>
              </li>
              <li className="link-nav">
                <Link to="/about-us">Про компанію</Link>
              </li>
              <li className="link-nav">
                <Link to="/restore">Технології виготовлення</Link>
              </li>
              <li className="link-nav">
                <Link to="/recomendation">Рекомендації щодо лікування</Link>
              </li>
            </ul>
          </nav>
          <div className="btn-header-wrapper">
            <ul className="main-wrapper-header">
              <li className="main-btn-wrapper">
                <div className="btn-header search-link">
                  <img src={search} alt="" />
                </div>
              </li>
              <li className="main-btn-wrapper">
                <div className="btn-header cart-link">
                  <img src={cart} alt="" />
                </div>
              </li>
              <li className="main-btn-wrapper">
                <div
                  className="btn-header user-link"
                  onClick={() => {
                    pushHandler("/login");
                  }}
                >
                  <img src={user} alt="" />
                </div>
              </li>
            </ul>
            <div className="leng-wrapper">
              <div className="btn-leng-header">
                <img src={uk} alt="" />
                <span>UK</span>
                <img src={downup} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="mobile-header">
        <div className="container-wrapper-mobile-header">
          <div className="btn-wrapper-open">
            <div
              className={`hamburger hamburger--spring-r ${
                activeMobile ? "is-active" : ""
              }`}
              onClick={changeActive}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
          <div className="logo-wrapper">
            <img src={logo} alt="" />
          </div>
          <div className="btn-wrapper-container">
            <div className="btn-header search-link">
              <img src={search} alt="" />
            </div>
            <div className="btn-header cart-link">
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
        <div className="hidden-wrapper-nav">
          <nav
            className={`mobile-nav-header ${
              activeMobile ? "active-mobile-nav" : "dactive-mobile-nav"
            }`}
          >
            <ul>
              <li>
                <Link to="/">Головна</Link>
              </li>
              <li>
                <Link to="/">Про компанію</Link>
              </li>
              <li>
                <Link to="/">Технології виготовлення</Link>
              </li>
              <li>
                <Link to="/">Рекомендації щодо лікування</Link>
              </li>

              <div className="lang-wrapper">
                <span>UK</span>
              </div>
              <div className="btn-login-wrapper">
                <div
                  className="btn-main-container"
                  onClick={() => history.push("/login")}
                >
                  <span>Авторизуватись</span>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
