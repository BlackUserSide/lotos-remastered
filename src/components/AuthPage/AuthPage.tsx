import React, { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
import showPasss from "../../img/cabinetIcon/showPass.png";
import "./auth.sass";
import { loginUser } from "../api/user";
import { useHistory } from "react-router";
export interface ILoginUser {
  login: string;
  password: string;
}
export const AuthPage: React.FC = () => {
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/cabinet");
    }
  }, [history]);
  const [showPass, setShowPass] = useState<boolean>(false);
  const changeShow = () => {
    if (showPass) {
      setShowPass(false);
      return;
    }
    setShowPass(true);
  };
  const [dataLogin, setDataLogin] = useState<ILoginUser>({
    login: "",
    password: "",
  });
  const [err, setErr] = useState<boolean>(false);
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const val = e.currentTarget.value;
    setDataLogin((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(dataLogin.login, dataLogin.password)
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 200:
              localStorage.setItem("token", res.data.token);
              window.location.href = "/cabinet";
              break;
            case 422:
              setErr(true);
              setDataLogin({
                login: "",
                password: "",
              });
              break;
          }
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />
      <div className="auth-login-wrapper">
        <div className="container-login">
          <form
            className={`main-form-login ${err ? "active-err" : ""}`}
            onSubmit={submitHandler}
          >
            <div className="top-line">
              <h1 className="h1">??????????????????????</h1>
              <p>?????????????? E-mail ???? ????????????, ?????? ???????????? ?? ?????????????????? ??????????????</p>
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                name="login"
                placeholder="Email"
                value={dataLogin.login}
                required
                onChange={changeHandler}
              />
            </div>
            <div className="input-wrapper">
              <img src={showPasss} alt="" onClick={changeShow} />
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="????????????"
                required
                value={dataLogin.password}
                onChange={changeHandler}
                className="password-input"
              />
            </div>
            <div className="reset-password">
              <Link to={"/forgot-password"}>???????????? ?????????????</Link>
            </div>
            <button className="main-btn-login">
              <span>????????????</span>
            </button>
            {err ? (
              <span className="err-wrapper">
                ?????????????? ???????????? ?????????? ???? ????????????, ???????? ??????????, ?????????????????? ???? ??????
              </span>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
