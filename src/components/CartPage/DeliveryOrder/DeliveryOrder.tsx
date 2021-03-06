import React, {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import InputMask from "react-input-mask";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../../../redux/rootReducer";
import { submitOrder } from "../../api/order";
import {
  ContextOrder,
  TDataCart,
  TDataOrder,
} from "../ContextOrder/ContextOrder";
import { HeaderCart } from "../HeaderCart/HeaderCart";
import { IOrderDeliverty } from "../type";
interface TestData {
  id: string | number;
  amount: string | number;
  price: number | null | string;
  sale: boolean | null;
  saleProduct: boolean | null;
}
export const DeliveryOrder: React.FC = () => {
  const history = useHistory();
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const { dataOrder, changeHandler, setOrderId, orderId } =
    useContext(ContextOrder);
  const [dataForm, setDataForm] = useState<IOrderDeliverty>({
    deliveryMethod: 0,
    firstName: "",
    lastName: "",
    surname: "",
    phone: "",
    email: "",
  });
  const dataCart = useSelector((state: RootState) => state.cart.dataCart);
  const [activePost, setActivePost] = useState<boolean>(false);
  const submitHandler = useCallback(() => {
    if (dataOrder) {
      const newObj: TDataOrder = {
        dataCart: [],
        allPrice: 0,
        deliveryMethod: 0,
        firstName: "",
        lastName: "",
        surname: "",
        phone: "",
        email: "",
        payMethod: 0,
        city: "",
        typePay: 0,
        numberPost: "",
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
      sendOrder();
    }
  };
  useEffect(() => {
    if (dataOrder) {
      if (orderId) {
        const newDataProducts: TestData[] = [];
        const localData = localStorage.getItem("cart");
        if (localData) {
          let parseData: TDataCart[] = JSON.parse(localData);
          parseData.map((e) => {
            let tmpObj = {
              id: e.id,
              amount: e.amount,
              price: 0,
              sale: e.sale,
              saleProduct: e.prodSale,
            };
            dataCart.map((t) => {
              if (t.id === e.id) {
                if (t.discount !== null) {
                  tmpObj = { ...tmpObj, price: t.discount };
                } else {
                  tmpObj = { ...tmpObj, price: t.price };
                }
              }
              return t;
            });
            newDataProducts.push(tmpObj);
            return e;
          });
        }
        console.log(newDataProducts, "newDataProducts");

        const data = {
          typePost: dataOrder.deliveryMethod,
          fullName: `${dataOrder.surname} ${dataOrder.firstName} ${dataOrder.lastName}`,
          numberPost: dataOrder.numberPost,
          phone: dataOrder.phone,
          status: "",
          productList: newDataProducts,
          city: dataOrder.city,
          typePay: 1,
          orderId: orderId,
        };

        submitOrder(data)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        history.push("/cart/payment");
      }
    }
  }, [orderId, dataOrder, history, dataCart]);

  const sendOrder = () => {
    if (dataOrder) {
      if (setOrderId) {
        let number = Math.random();
        number.toString(36); // '0.xtis06h6'
        let orderNumber = number.toString(36).substr(2, 9); // 'xtis06h6'
        setOrderId(orderNumber);
      }
    }
  };
  console.log(dataOrder?.dataCart);

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
                <p>???????? ??????????</p>
              </div>
            </div>
            {activeItem === 1 ? (
              <div className="hidden-wrapper">
                <div className="container-input">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="???????? ?????????"
                      onChange={changeHandlerWrapper}
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="???? ????????????????"
                      onChange={changeHandlerWrapper}
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="surname"
                      placeholder="???????? ????????????????"
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
                      placeholder="?????? E-mail"
                    />
                  </div>
                </div>
                <div className="container-city-number-post">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="city"
                      onChange={changeHandlerWrapper}
                      placeholder="?????????????? ??????????"
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="numberPost"
                      onChange={changeHandlerWrapper}
                      placeholder="?????????????? ???????????????????? ?????????? ??????????"
                    />
                  </div>
                </div>
                <div className="btn-container-delivery" onClick={submitHandler}>
                  <span>???????????????? ???????????? ????????????????</span>
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
                <p>????????????????</p>
              </div>
            </div>
            {activeItem === 2 ? (
              <div className="hidden-wrapper">
                <div className="container-input">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="???????? ?????????"
                      onChange={changeHandlerWrapper}
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="???? ????????????????"
                      onChange={changeHandlerWrapper}
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="surname"
                      placeholder="???????? ????????????????"
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
                      placeholder="?????? E-mail"
                    />
                  </div>
                </div>
                <div className="container-city-number-post">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="city"
                      onChange={changeHandlerWrapper}
                      placeholder="?????????????? ??????????"
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="adress"
                      onChange={changeHandlerWrapper}
                      placeholder="?????????????? ???????????? (????????????, ????????????, ??????, ????????????????)"
                    />
                  </div>
                </div>
                <div className="btn-container-delivery" onClick={submitHandler}>
                  <span>???????????????? ???????????? ????????????????</span>
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
                <p>??????????????????</p>
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
            <span>???????????????? ????????????????????</span>
          </div>
        </div>
      </div>
    </>
  );
};
