import React, { useEffect, useState } from "react";
import { Footer } from "../MainPage/Footer/Footer";
import { Header } from "../MainPage/Header/Header";
// import imgs from "../../img/textProd.png";
// import left from "../../img/prodIcon/left.png";
// import right from "../../img/prodIcon/right.png";
// import cart from "../../img/prodIcon/cart.png";
// import bonus from "../../img/prodIcon/bonus.png";
// import discountIco from "../../img/prodIcon/discount.png";
import "./card.sass";
import { InstuctionsProduct } from "./InstuctionsProduct/InstuctionsProduct";
import { MainCardContent } from "./MainCardContent/MainCardContent";
//import { ReviewCollection } from "./ReviewCollection/ReviewCollection";
import { AuthSection } from "../MainPage/AuthSection/AuthSection";
import { useParams } from "react-router";
import { getProductById } from "../api/shop";
import { IDataProduct } from "./type";

type TParams = {
  id: string;
};
export const CardProduct: React.FC = () => {
  const params: TParams = useParams();
  //const [amount, setAmount] = useState<number>(1);
  const [dataProduct, setDataProduct] = useState<IDataProduct>({
    categoryId: 0,
    subcategoryId: 0,
    name: "",
    desc: "",
    menual: "",
    discount: 0,
    price: 0,
    isBonus: false,
    priceForUser: null,
    src: "",
  });

  // const changeHandler = (val: number) => {
  //   if (val <= 0) {
  //     setAmount(1);
  //     return;
  //   }
  //   setAmount(val);
  // };
  useEffect(() => {
    getProductById(+params.id)
      .then((res) => {
        if (res) {
          console.log(res);

          const dataWrapper = res.data[0];
          if (dataWrapper) {
            setDataProduct(dataWrapper);
          }
        }
      })
      .catch((err) => console.log(err));
  }, [params.id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(dataProduct);

  return (
    <>
      <Header />
      <div className="card-product">
        <MainCardContent data={dataProduct} />
        <InstuctionsProduct dataManual={dataProduct.menual} />
        {/* <ReviewCollection /> */}
        {/* <div className="container-wrapper-new">
          <div className="top-line-wrapper-new">
            <h3 className="h3">Вам також може сподобатись:</h3>
          </div>
          <div className="container-item">
            <div className="item-product-wrapper">
              <div className="image-wrapper">
                <img src={imgs} alt="" />
              </div>
              <div className="text-composition">
                <h3 className="h3">{dataProduct?.name}</h3>
                <p className="desc-wrapper">{dataProduct?.desc}</p>
                {dataProduct?.discount !== null ? (
                  <div className="discount-wrapper">
                    <span className="full-price">{dataProduct?.price} грн</span>
                    <span className="discount-price">
                      {dataProduct?.discount} грн
                    </span>
                  </div>
                ) : (
                  <div className="full-price-wrapper">
                    <span className="full-pruce">{dataProduct.price} грн</span>
                  </div>
                )}
                <div className="price-for-user">
                  <p>
                    Ціна для учасників програми{" "}
                    {dataProduct?.priceForUser !== null
                      ? dataProduct?.priceForUser
                      : ""}{" "}
                    грн.
                  </p>
                </div>
                <div className="amount-wrapper">
                  <img
                    src={left}
                    onClick={() => {
                      changeHandler(amount - 1);
                    }}
                    className="left-ico"
                    alt=""
                  />
                  <input type="text" value={amount} disabled={true} />
                  <img
                    src={right}
                    onClick={() => {
                      changeHandler(amount + 1);
                    }}
                    className="right-ico"
                    alt=""
                  />
                </div>
                <div className="btn-wrapper-item-product">
                  <div className="btn-add-to-cart">
                    <span>
                      <img src={cart} alt="" /> У кошик
                    </span>
                  </div>
                  <div className="btn-bay-on-click">
                    <span>Купити в 1 клік </span>
                  </div>
                  <div className="list-info-prod">
                    {dataProduct?.isBonus ? (
                      <div className="hidden-wrapper">
                        <div className="bonus-ico-wrapper">
                          <img src={bonus} alt="" />

                          <p>Даний препарат можна придбати за бонуси.</p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {dataProduct?.discount !== null ? (
                      <div className="discount-wrapper">
                        <img src={discountIco} alt="" />
                        <div className="hidden-wrapper">
                          <p>На даний препарат діє акція.</p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <AuthSection />
      <Footer />
    </>
  );
};
