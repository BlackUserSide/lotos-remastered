import React, { FormEvent, useEffect, useState } from "react";
import { IRegisterData } from "../../RegisterPage/type";
import "./popuppassword.sass";
type IParams = {
  setActivePop: React.Dispatch<React.SetStateAction<boolean>>;
  submitHandler: () => void;
  setDataForm: React.Dispatch<React.SetStateAction<IRegisterData>>;
  dataForm: IRegisterData;
};
interface IPassword {
  password: string;
  replacePassword: string;
}
export const PopUpPassword: React.FC<IParams> = ({
  setActivePop,
  submitHandler,
  setDataForm,
  dataForm,
}) => {
  const [dataPassword, setDataPassword] = useState<IPassword>({
    password: "",
    replacePassword: "",
  });
  const [err, setErr] = useState<string>("");
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const val = e.currentTarget.value;
    setDataPassword((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  const submitHandlerPassword = () => {
    if (dataPassword.password.length >= 8) {
      if (dataPassword.password === dataPassword.replacePassword) {
        //let rex = "/^[а-яА-ЯёЁ.a-zA-Z\w\d\-]*$/";
        setDataForm((prev) => ({
          ...prev,
          password: dataPassword.password,
        }));
      } else {
        setErr("Паролі не співпадають");
      }
    } else {
      setErr("Пароль менше 8 символів");
    }
  };
  useEffect(() => {
    if (dataForm.password !== "") {
      submitHandler();
    }
  }, [dataForm, submitHandler]);
  return (
    <div className="pop-up-password">
      <div className="bg-lock" onClick={() => setActivePop(false)}></div>
      <div className="pop-up-wrapper pop-password">
        <div className="top-line-wrapper">
          <p>Введіть пароль</p>
          <span>Пароль має бути не менше 8 символів</span>
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            name="password"
            placeholder="Пароль (Пароль повинен містити цифри та літери)"
            onChange={changeHandler}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            name="replacePassword"
            placeholder="Повторіть пароль (Пароль повинен містити цифри та літери)"
            onChange={changeHandler}
            required
          />
        </div>
        <div
          className="btn-wrapper-register-password"
          onClick={submitHandlerPassword}
        >
          <span>Зберегти</span>
        </div>
        {err !== "" ? <span className="err-wrapper">{err}</span> : ""}
      </div>
    </div>
  );
};
