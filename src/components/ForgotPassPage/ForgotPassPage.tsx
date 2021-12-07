import React, { FormEvent, useState } from "react";
import "./forgotpasspage.sass";
import InputMask from "react-input-mask";
import { Header } from "../MainPage/Header/Header";
import { Footer } from "../MainPage/Footer/Footer";
import show from "../../img/cabinetIcon/showPass.png";
import {
  checkCodePass,
  resetPasswordWrapper,
  sendUpaderCodePass,
} from "../api/user";
import { useHistory } from "react-router";
interface IFargotPass {
  step: number;
  err: string;
}
interface IFargotPassWrapper {
  password: string;
  confirmPass: string;
}
export const ForgotPassPage: React.FC = () => {
  const history = useHistory();
  const [dataPhone, setDataPhone] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [err, setErr] = useState<IFargotPass>({
    step: 0,
    err: "",
  });
  const [pass, setPass] = useState<IFargotPassWrapper>({
    password: "",
    confirmPass: "",
  });
  const [showPass, setShowPass] = useState<number>(0);
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setDataPhone(val);
  };
  const submitHandler = () => {
    let phone = dataPhone;

    sendUpaderCodePass(phone)
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 200:
              setStep(2);
              setErr({
                step: 0,
                err: "",
              });
              break;
            case 500:
              setErr({
                step: 1,
                err: "Неправильний номер телефону",
              });
              break;
          }
        }
      })
      .catch((err) => console.log(err));
  };
  const changeCode = (e: FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setCode(val);
  };
  const submitHandlerCode = () => {
    checkCodePass(code)
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 200:
              setStep(3);
              setErr({
                step: 0,
                err: "",
              });
              break;

            case 500:
              setErr({
                step: 2,
                err: "Невірний код",
              });
              break;
          }
        }
      })
      .catch((err) => console.log(err));
  };
  const changePassHandler = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const val = e.currentTarget.value;
    setPass((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  const submitPassWrapper = () => {
    if (pass.confirmPass !== pass.password) {
      setErr({
        step: 3,
        err: "Паролі не співпадають",
      });
      return;
    }
    if (pass.confirmPass === "" || pass.password === "") {
      setErr({
        step: 3,
        err: "Ви не ввели пароль",
      });
      return;
    }
    if (pass.password.length < 8) {
      setErr({
        step: 3,
        err: "Пароль має бути більше 8 символів",
      });
      return;
    }
    let data = {
      newPassword: pass.password,
      code: code,
    };
    resetPasswordWrapper(data)
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 200:
              setStep(4);
              break;
            case 500:
              setErr({
                step: 3,
                err: "Помилка сервера",
              });
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="forgot-password-page">
        <div className="container-wrapper-forgot">
          {step === 1 ? (
            <>
              <div className="top-line-wrapper">
                <h1 className="h1">Відновити пароль</h1>
                {err.step === 1 ? <span>{err.err}</span> : ""}
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
                <div className="btn-change-password" onClick={submitHandler}>
                  <span>Надіслати СМС</span>
                </div>
              </div>{" "}
            </>
          ) : (
            ""
          )}
          {step === 2 ? (
            <>
              <div className="top-line-wrapper">
                <h1 className="h1">Відновити пароль</h1>
                <p className="second-top">Введіть код із смс</p>
                {err.step === 2 ? <span>{err.err}</span> : ""}
              </div>
              <div className="input-wrapper">
                <InputMask
                  mask={"9999"}
                  placeholder="Код з смс"
                  name="phone"
                  onChange={changeCode}
                  value={code}
                  className="main-input"
                  required
                />
              </div>
              <div className="btn-wrapper">
                <div
                  className="btn-change-password"
                  onClick={submitHandlerCode}
                >
                  <span>Введіть код із смс</span>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {step === 3 ? (
            <>
              <div className="top-line-wrapper">
                <h1 className="h1">Відновити пароль</h1>
                <p className="second-top">Введіть та повторіть пароль</p>
                {err.step === 3 ? <span>{err.err}</span> : ""}
              </div>
              <div className="input-wrapper">
                <input
                  type={showPass === 1 ? "text" : "password"}
                  name="password"
                  value={pass.password}
                  placeholder="Введіть пароль"
                  onChange={changePassHandler}
                />
                <img
                  src={show}
                  onClick={() => {
                    setShowPass(1);
                  }}
                  alt=""
                />
              </div>
              <div className="input-wrapper">
                <input
                  type={showPass === 2 ? "text" : "password"}
                  name="confirmPass"
                  placeholder="Повторіть пароль"
                  value={pass.confirmPass}
                  onChange={changePassHandler}
                />
                <img
                  src={show}
                  onClick={() => {
                    setShowPass(2);
                  }}
                  alt=""
                />
              </div>
              <div className="btn-wrapper">
                <div
                  className="btn-change-password"
                  onClick={submitPassWrapper}
                >
                  <span>Зберегти</span>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {step === 4 ? (
            <>
              <div className="top-line-wrapper">
                <h1 className="h1">Пароль успішно змінено</h1>
                <p className="second-top">
                  Натисніть , щоб перейти на сторінку авторизації
                </p>
              </div>

              <div className="btn-wrapper">
                <div
                  className="btn-change-password"
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  <span>Супер</span>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
