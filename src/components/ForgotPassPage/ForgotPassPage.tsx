import React, { FormEvent, useState } from "react";
import "./forgotpasspage.sass";
import InputMask from "react-input-mask";
import { Header } from "../MainPage/Header/Header";
import { Footer } from "../MainPage/Footer/Footer";
export const ForgotPassPage: React.FC = () => {
  const [dataPhone, setDataPhone] = useState<string>("");
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setDataPhone(val);
  };
  return (
    <>
      <Header />
      <div className="forgot-password-page">
        <div className="container-wrapper-forgot">
          <div className="top-line-wrapper">
            <h1 className="h1">Відновити пароль</h1>
            <p className="second-top">
              Введіть свій номер, що було вказано при реєстрації.
            </p>
          </div>
          <div className="input-wrapper">
            <InputMask
              mask={"+380(99)999-99-99"}
              placeholder="+38(___)___-__-__ *"
              name="phone"
              onChange={changeHandler}
              value={dataPhone}
              className="main-input"
              required
            />
          </div>
          <div className="btn-wrapper">
            <div className="btn-change-password">
              <span>Надіслати СМС</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
