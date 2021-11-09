import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/Logo.png";
import search from "../../../img/iconHeader/search.png";
import cart from "../../../img/iconHeader/cart.png";
import user from "../../../img/iconHeader/user.png";
import downup from "../../../img/down-up.png";
import uk from "../../../img/countries/uk.png";
import "./header.sass";
export const Header: React.FC = () => {
  return (
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
              <div className="btn-header user-link">
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
  );
};
