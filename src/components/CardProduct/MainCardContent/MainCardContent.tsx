import React, { useState } from "react";
import right from "../../../img/prodIcon/right.png";
import left from "../../../img/prodIcon/left.png";
import { Link, useHistory } from "react-router-dom";
import { IDataProduct } from "../type";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/Cart/actionsCart";

type TParamas = {
  data: IDataProduct;
};
type Params = {
  id: string;
};
export const MainCardContent: React.FC<TParamas> = ({ data }) => {
  const params: Params = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const [amoun, setAmount] = useState<number>(1);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const changeAmount = (newAmount: number) => {
    if (newAmount <= 0) {
      setAmount(1);
      return;
    }

    setAmount(newAmount);
  };
  const addToCartHandler = () => {
    if (showPopUp) {
      setShowPopUp(false);
      return;
    }
    setShowPopUp(true);
    dispatch(addToCart(+params.id, amoun));
  };
  return (
    <div className="main-card-content">
      <div className="main-container-card">
        <div className="image-wrapper-card">
          <div className="main-image-container">
            <img src={`http://91.228.155.147/img/${data.src}`} alt="" />
          </div>
          <div className="collection-wrapper-image">
            <img src={`http://91.228.155.147/img/${data.src}`} alt="" />
          </div>
        </div>
        <div className="text-collection-card">
          <div className="id-product-wrapper">
            <p>{params?.id}</p>
          </div>
          <div className="name-product">
            <h2 className="h2">{data.name}</h2>
          </div>
          <div className="desc-product">
            <p>{data.desc}</p>
          </div>
          {/* <div className="star-wrapper">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                fill="#E0E0E0"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                fill="#E0E0E0"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                fill="#E0E0E0"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                fill="#E0E0E0"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                fill="#E0E0E0"
              />
            </svg>
          </div> */}
          <div className="price-wrapper">
            {data.discount !== null ? (
              <div className="discount-wrapper">
                <div className="full-price">
                  <p>{data.price} ??????</p>
                </div>
                <div className="discount-price">
                  <p>{data.discount} ??????</p>
                </div>
              </div>
            ) : (
              <div className="full-price-wrapper">
                <p className="full-prie">{data.price} ??????</p>
              </div>
            )}
          </div>
          <div className="amount-wrapper">
            <img
              src={left}
              onClick={() => {
                changeAmount(amoun - 1);
              }}
              className="left-ico"
              alt=""
            />
            <input type="text" value={amoun} disabled={true} />
            <img
              src={right}
              onClick={() => {
                changeAmount(amoun + 1);
              }}
              className="right-ico"
              alt=""
            />
          </div>
          <div className="btn-wrapper-card">
            <div
              className="btn-main-bay-in-click"
              onClick={() => history.push("/shop")}
            >
              <span>?????????????????????? ???? ????????????????</span>
            </div>
            <div
              className="btn-main-wrapper-add-to-cart"
              onClick={addToCartHandler}
            >
              <span>???????????? ?? ??????????</span>
            </div>
          </div>
          {data.priceForUser ? (
            <div className="price-for-user">
              <p>
                ???????? ???? ?????????????? ?????? ?????????????????? ???????????????? {data.priceForUser} ??????.
              </p>

              <Link to="/login">?????????? ??????????????????</Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
