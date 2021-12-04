import React, { FormEvent, useState } from "react";
import InputMask from "react-input-mask";
import "./formcallback.sass";
type Tprops = {
  changeHandler: () => void;
};
interface IFormCallback {
  name: string;
  phone: string;
}
export const FormCallBack: React.FC<Tprops> = ({ changeHandler }) => {
  const [dataForm, setDataForm] = useState<IFormCallback>({
    name: "",
    phone: "",
  });
  const [send, setSend] = useState<boolean>(false);
  const changeInputHandler = (e: FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    const name = e.currentTarget.name;
    setDataForm((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(dataForm);
    setSend(true);
  };
  return (
    <div className="form-call-back">
      <div className="bg-lock" onClick={changeHandler}></div>
      <form className="main-call-back" onSubmit={submitHandler}>
        {send ? (
          <>
            <div className="top-line-wrapper">
              <h2 className="h2">Ваша заявка прийнята</h2>
            </div>
            <div className="btn-wrapper-cancel" onClick={changeHandler}>
              <span>Окей</span>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="top-line-wrapper">
              <h2 className="h2">Надішліть заявку і ми вам передзвонимо</h2>
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                value={dataForm.name}
                onChange={changeInputHandler}
                placeholder="Введіть ім'я"
                required
              />
            </div>
            <div className="input-wrapper">
              <InputMask
                mask={"+380(99)999-99-99"}
                placeholder="+38(___)___-__-__ *"
                name="phone"
                onChange={changeInputHandler}
                value={dataForm.phone}
                className="main-input"
                required
              />
            </div>
            <button>
              <span>Відправити</span>
            </button>
          </>
        )}
      </form>
    </div>
  );
};
