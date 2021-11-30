import React, { FormEvent, useState } from "react";
import "./changepass.sass";
import showPass from "../../../img/cabinetIcon/showPass.png";
import { changePassword } from "../../api/user";
import closeIcon from "../../../img/close-icon.png";
interface IchangePass {
  oldPassword: string;
  newPassword: string;
  confirmPass: string;
}
export interface ISubmitPass {
  oldPassword: string;
  newPassword: string;
}
type TProps = {
  setActiveChange: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ChangePass: React.FC<TProps> = ({ setActiveChange }) => {
  const [dataPass, setDataPass] = useState<IchangePass>({
    oldPassword: "",
    newPassword: "",
    confirmPass: "",
  });
  const [showPassWrapper, setShowPassWrapper] = useState<number>(0);
  const [err, setErr] = useState<string>("");
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    setDataPass((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const changeShowPass = (input: number) => {
    if (showPassWrapper === input) {
      setShowPassWrapper(0);
      return;
    }
    setShowPassWrapper(input);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dataPass.confirmPass !== dataPass.newPassword) {
      setErr("Введені паролі не збігаються");
      return;
    }
    if (dataPass.newPassword.length < 8) {
      setErr("Пароль має бути більше 8 символів");
      return;
    }
    let data: ISubmitPass = {
      newPassword: dataPass.newPassword,
      oldPassword: dataPass.oldPassword,
    };
    changePassword(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  console.log(err);

  return (
    <div className="change-pass">
      <div
        className="bg-lock"
        onClick={() => {
          setActiveChange(false);
        }}
      ></div>
      <form className="change-pass-form-wrapper" onSubmit={submitHandler}>
        <div className="icon-wrapper-close">
          <img src={closeIcon} onClick={() => setActiveChange(false)} alt="" />
        </div>
        <div className="top-line">
          <h3 className="h3">Зміна паролю</h3>
          <p>Уважно стежте за введеними даними</p>
          {err !== "" ? <span>{err}</span> : ""}
        </div>
        <div className="input-wrapper">
          <input
            type={showPassWrapper === 1 ? "text" : "password"}
            name="oldPassword"
            placeholder="Введіть ваш пароль"
            value={dataPass.oldPassword}
            onChange={changeHandler}
            required
          />
          <img src={showPass} onClick={() => changeShowPass(1)} alt="" />
        </div>
        <div className="input-wrapper">
          <input
            type={showPassWrapper === 2 ? "text" : "password"}
            name="newPassword"
            placeholder="Введіть ваш новий пароль"
            value={dataPass.newPassword}
            onChange={changeHandler}
            required
          />
          <img src={showPass} onClick={() => changeShowPass(2)} alt="" />
        </div>
        <div className="input-wrapper">
          <input
            type={showPassWrapper === 3 ? "text" : "password"}
            name="confirmPass"
            placeholder="Потвердіть ваш новий пароль"
            value={dataPass.confirmPass}
            onChange={changeHandler}
            required
          />
          <img src={showPass} onClick={() => changeShowPass(3)} alt="" />
        </div>
        <button className="btn-change-pass">
          <span>Зберегти новий пароль</span>
        </button>
      </form>
    </div>
  );
};
