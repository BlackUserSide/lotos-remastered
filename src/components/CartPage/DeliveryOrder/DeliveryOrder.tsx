import React, {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import InputMask from "react-input-mask";
import { useHistory } from "react-router";
import { ContextOrder, TDataOrder } from "../ContextOrder/ContextOrder";
import { HeaderCart } from "../HeaderCart/HeaderCart";
import { IOrderDeliverty } from "../type";
export const DeliveryOrder: React.FC = () => {
  const history = useHistory();
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const { dataOrder, changeHandler } = useContext(ContextOrder);
  const [dataForm, setDataForm] = useState<IOrderDeliverty>({
    deliveryMethod: 0,
    firstName: "",
    lastName: "",
    surname: "",
    phone: "",
    email: "",
  });

  const [activePost, setActivePost] = useState<boolean>(false);
  const submitHandler = useCallback(() => {
    if (dataOrder) {
      const newObj: TDataOrder = {
        dataCart: "",
        allPrice: 0,
        deliveryMethod: 0,
        firstName: "",
        lastName: "",
        surname: "",
        phone: "",
        email: "",
        payMethod: 0,
      };
      for (let val in dataOrder) {
        if (val in dataForm) {
          newObj[val] = dataForm[val];
          continue;
        }
      }
      if (changeHandler) {
        changeHandler(newObj);
      }
    }
  }, [changeHandler, dataForm, dataOrder]);
  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart !== null) {
      return;
    }
    history.push("/cart/main");
  }, [history]);
  useEffect(() => {
    if (dataOrder) {
      if (
        dataOrder.deliveryMethod !== 0 &&
        dataOrder.lastName !== "" &&
        dataOrder.email !== "" &&
        dataOrder.firstName !== "" &&
        dataOrder.phone !== "" &&
        dataOrder.surname
      ) {
        setActivePost(true);
      } else {
        console.log(dataOrder.deliveryMethod);

        if (dataForm.deliveryMethod === 3) {
          setActivePost(true);
        }
      }
    }
  }, [dataOrder, dataForm]);
  // useEffect(() => {
  //   submitHandler();
  // }, [dataForm, submitHandler]);
  const changeHandlerWrapper = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const val = e.currentTarget.value;

    setDataForm((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  const pushForPayMethod = () => {
    if (activePost) {
      history.push("/cart/payment");
    }
  };
  return (
    <>
      <HeaderCart />
      <div className="delivery-order">
        <div className="container-list-wrapper">
          <div className="list-wrapper-item">
            <div
              className="top-line-wrapper"
              style={
                activeItem === 1
                  ? { marginBottom: "30px" }
                  : { marginBottom: "0" }
              }
            >
              <div
                className="btn-active-wrapper"
                onClick={() => {
                  setActiveItem(1);
                  setDataForm((prev) => ({
                    ...prev,
                    deliveryMethod: 1,
                  }));
                }}
              >
                {activeItem === 1 ? <span></span> : ""}
              </div>
              <div className="main-h-handl">
                <p>Нова пошта</p>
              </div>
            </div>
            {activeItem === 1 ? (
              <div className="hidden-wrapper">
                <div className="container-input">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Ваше ім’я"
                      onChange={changeHandlerWrapper}
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="По батькові"
                      onChange={changeHandlerWrapper}
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="surname"
                      placeholder="Ваше прізвище"
                      onChange={changeHandlerWrapper}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputMask
                      mask={"+380(99)999-99-99"}
                      placeholder="+38(___)___-__-__ *"
                      name="phone"
                      className="main-input"
                      onChange={changeHandlerWrapper}
                      //   onChange={changeHandler}
                      //value={dataForm.phone}
                      required
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="email"
                      onChange={changeHandlerWrapper}
                      placeholder="Ваш E-mail"
                    />
                  </div>
                </div>
                <div className="container-city-number-post">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="city"
                      onChange={changeHandlerWrapper}
                      placeholder="Введіть місто"
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="numberPost"
                      onChange={changeHandlerWrapper}
                      placeholder="Введіть відділення Нової пошти"
                    />
                  </div>
                </div>
                <div className="btn-container-delivery" onClick={submitHandler}>
                  <span>Зберегти спосіб доставки</span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="list-wrapper-item">
            <div
              className="top-line-wrapper"
              style={
                activeItem === 2
                  ? { marginBottom: "30px" }
                  : { marginBottom: "0" }
              }
            >
              <div
                className="btn-active-wrapper"
                onClick={() => {
                  setActiveItem(2);
                  setDataForm((prev) => ({
                    ...prev,
                    deliveryMethod: 2,
                  }));
                }}
              >
                {activeItem === 2 ? <span></span> : ""}
              </div>
              <div className="main-h-handl">
                <p>Укрпошта</p>
              </div>
            </div>
            {activeItem === 2 ? (
              <div className="hidden-wrapper">
                <div className="container-input">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Ваше ім’я"
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="По батькові"
                      onChange={changeHandlerWrapper}
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="surname"
                      placeholder="Ваше прізвище"
                      onChange={changeHandlerWrapper}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputMask
                      mask={"+380(99)999-99-99"}
                      placeholder="+38(___)___-__-__ *"
                      name="phone"
                      className="main-input"
                      onChange={changeHandlerWrapper}
                      //value={dataForm.phone}
                      required
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="email"
                      onChange={changeHandlerWrapper}
                      placeholder="Ваш E-mail"
                    />
                  </div>
                </div>
                <div className="container-city-number-post">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="city"
                      onChange={changeHandlerWrapper}
                      placeholder="Введіть місто"
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="adress"
                      onChange={changeHandlerWrapper}
                      placeholder="Введіть адресу (індекс, вулицю, дім, квартиру)"
                    />
                  </div>
                </div>
                <div className="btn-container-delivery" onClick={submitHandler}>
                  <span>Зберегти спосіб доставки</span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="list-wrapper-item">
            <div
              className="top-line-wrapper"
              style={
                activeItem === 1
                  ? { marginBottom: "30px" }
                  : { marginBottom: "0" }
              }
            >
              <div
                className="btn-active-wrapper"
                onClick={() => {
                  setActiveItem(3);

                  setDataForm((prev) => ({
                    ...prev,
                    deliveryMethod: 3,
                  }));
                  submitHandler();
                }}
              >
                {activeItem === 3 ? <span></span> : ""}
              </div>
              <div className="main-h-handl">
                <p>Самовивіз</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-box-btn">
          <div
            className={`btn-nex-wrapper ${
              activePost ? "active-btn-nex-wrapper" : ""
            }`}
            onClick={() => {
              pushForPayMethod();
            }}
          >
            <span>Оплатити замовлення</span>
          </div>
        </div>
      </div>
    </>
  );
};
