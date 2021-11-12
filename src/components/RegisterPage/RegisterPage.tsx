import React, { FormEvent, useEffect, useState } from "react";
import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
import InputMask from "react-input-mask";
import "./registerpage.sass";
import { IErrRegister, IRegisterData } from "./type";
import { validEmail } from "./validation";
import { useParams } from "react-router";
import { Prealoder } from "../ui/Preloader/Preloader";
import { checkLinkData, registerUser } from "../api/user";
import { PopUpPassword } from "../ui/PopUpPassword/PopUpPassword";
type Params = {
  link: string;
};
export const RegisterPage: React.FC = () => {
  let params: Params = useParams();
  const [dataForm, setDataForm] = useState<IRegisterData>({
    name: "",
    lastName: "",
    sex: "",
    email: "",
    phone: "",
    surname: "",
    password: "",
    inviteLink: "",
  });
  const [close, setClose] = useState<boolean>(true);
  const [err, setErr] = useState<IErrRegister>({
    name: "",
    message: "",
  });
  const [activePop, setActivePop] = useState<boolean>(false);
  useEffect(() => {
    console.log(
      params.link ===
        "U2FsdGVkX1/UAox1QBUAh0ez2AS4zsQevMZ+vtaWwcSO3Z6PJycls7d47RLS8ywz"
    );

    checkLinkData(params.link)
      .then((res) => {
        if (res) {
          if (res.status === 200) {
            setClose(false);
            setDataForm((prev) => ({
              ...prev,
              inviteLink: params.link,
            }));
          }
        }
      })
      .catch((err) => console.log(err));
  }, [params]);
  const submitHandler = () => {
    if (validEmail(dataForm.email)) {
      if (dataForm.password) {
        registerUser(dataForm)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return;
    } else {
      setDataForm((prev) => ({
        ...prev,
        email: "",
      }));
      setErr({
        name: "email",
        message: "Введіть правильний Email",
      });
    }
  };
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name: string = e.currentTarget.name;
    const val: string = e.currentTarget.value;
    setDataForm((prev) => ({
      ...prev,
      [name]: val,
    }));
    return;
  };
  const changeActive = () => {
    if (activePop) {
      setActivePop(false);
      return;
    }
    setActivePop(true);
  };
  const changeSexHandler = (sex: string) => {
    if (sex === "male") {
      setDataForm((prev) => ({
        ...prev,
        sex: "male",
      }));
      return;
    }
    setDataForm((prev) => ({
      ...prev,
      sex: "famale",
    }));
  };

  return (
    <>
      <Header />
      <div className="register-page">
        <form className="main-form-register" onSubmit={submitHandler}>
          {close ? (
            <>
              <Prealoder />
              <span className="err-form-wrapper">Неправильне запрошення</span>
            </>
          ) : (
            <>
              <div className="container-input-wrapper">
                <div className="top-line">
                  <h1 className="h1">Реєстрація</h1>
                  <p>Щоб пройти реєстрацію, заповніть, будь ласка поля.</p>
                </div>
                <div className="collection-input">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="name"
                      placeholder="Ім’я*"
                      className="main-input"
                      onChange={changeHandler}
                      value={dataForm.name}
                      required
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="surname"
                      placeholder="Прізвище*"
                      onChange={changeHandler}
                      required
                      className="main-input"
                      value={dataForm.surname}
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="По батькові*"
                      className="main-input"
                      onChange={changeHandler}
                      required
                      value={dataForm.lastName}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputMask
                      mask={"+380(99)999-99-99"}
                      placeholder="+38(___)___-__-__ *"
                      name="phone"
                      className="main-input"
                      onChange={changeHandler}
                      value={dataForm.phone}
                      required
                    />
                  </div>

                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="email"
                      placeholder={
                        err.name === "email" ? err.message : "Ваш E-mail*"
                      }
                      className={`main-input ${
                        err.name === "email" ? "err-main-input" : ""
                      }`}
                      onChange={changeHandler}
                      value={dataForm.email}
                      required
                    />
                  </div>
                  <div className="input-wrapper-male-famale">
                    <span>Оберіть стать:</span>
                    <div className="input-wrapepr">
                      <div
                        className={`checkbox-wrapper `}
                        onClick={() => {
                          changeSexHandler("male");
                        }}
                      >
                        <div
                          className={`span-checked ${
                            dataForm.sex === "male" ? "active-span-checked" : ""
                          }`}
                        ></div>
                      </div>
                      <label>Чоловік</label>
                    </div>
                    <div className="input-wrapepr">
                      <div
                        className="checkbox-wrapper"
                        onClick={() => {
                          changeSexHandler("famale");
                        }}
                      >
                        <div
                          className={`span-checked ${
                            dataForm.sex === "famale"
                              ? "active-span-checked"
                              : ""
                          }`}
                        ></div>
                      </div>
                      <label>Жінка</label>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn-send-register"
                onClick={changeActive}
              >
                <span>Зареєструватись</span>
              </button>{" "}
            </>
          )}
        </form>
        {activePop ? (
          <PopUpPassword
            setActivePop={setActivePop}
            submitHandler={submitHandler}
            setDataForm={setDataForm}
            dataForm={dataForm}
          />
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
};
//TODO Доп проверка на заполнение формы регистрации
