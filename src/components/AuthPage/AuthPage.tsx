import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
import showPasss from "../../img/cabinetIcon/showPass.png";
import "./auth.sass";
export const AuthPage: React.FC = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const changeShow = () => {
    if (showPass) {
      setShowPass(false);
      return;
    }
    setShowPass(true);
  };
  return (
    <>
      <Header />
      <div className="auth-login-wrapper">
        <div className="container-login">
          <form className="main-form-login">
            <div className="top-line">
              <h1 className="h1">Авторизація</h1>
              <p>Введіть логін та пароль, щоб увійти в особистий кабінет</p>
            </div>
            <div className="input-wrapper">
              <input type="text" name="login" placeholder="Логін" required />
            </div>
            <div className="input-wrapper">
              <img src={showPasss} alt="" onClick={changeShow} />
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Пароль"
                required
                className="password-input"
              />
            </div>
            <div className="reset-password">
              <Link to={"/reset-password"}>Забули пароль?</Link>
            </div>
            <button className="main-btn-login">
              <span>Увійти</span>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
