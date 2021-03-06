import React from "react";
import "./actual.sass";
import photo1 from "../../../img/aktual_propos.jpg";
import photo2 from "../../../img/actual3.jpg";
import photo3 from "../../../img/actual2.jpg";
import { useHistory } from "react-router";
import Slider from "react-slick";
export const ActualProducts: React.FC = () => {
  const history = useHistory();
  const setings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="actual-products">
      <div className="actual-container-product">
        <div className="main-wrapper-actual">
          <div className="actual-item-main">
            <Slider {...setings}>
              <div className="item-slider">
                <div className="image-wrapper">
                  <img src={photo1} alt="" />
                </div>
                <div className="container-text-wrapper">
                  <h4 className="h4">Kardiofit</h4>
                  <p className="desc-product">
                    Покращує загальний стан фізичних навантажень, сприяючи
                    оптимальній працездатності. Оптимізує дію антиангінальних,
                    антигіпертензивних та антиаритмічних препаратів.
                  </p>
                  <div
                    className="btn-main-collection light-btn"
                    onClick={() => history.push("/card-product/21")}
                  >
                    <span>Перейти до товару</span>
                  </div>
                </div>
              </div>
              <div className="item-slider">
                <div className="image-wrapper">
                  <img src={photo1} alt="" />
                </div>
                <div className="container-text-wrapper">
                  <h4 className="h4">Test Item slider</h4>
                  <p className="desc-product">test</p>
                  <div
                    className="btn-main-collection light-btn"
                    onClick={() => history.push("/card-product/21")}
                  >
                    <span>Перейти до товару</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="actual-second-product">
          <div className="item-second-product">
            <div className="image-wrapper">
              <img src={photo2} alt="" />
            </div>
            <div className="container-text-wrapper">
              <h4 className="h4">Nano compositum Citrus</h4>
              <p className="desc-product">
                Фіто-молекулярна рідина Протизапальний комплекс активного
                протистояння інфекцій, профілактики патологічних станів, що з
                присутністю інфекційного збудника
              </p>
              <div
                className="btn-main-collection light-btn"
                onClick={() => history.push("/card-product/4")}
              >
                <span>Перейти до товару</span>
              </div>
            </div>
          </div>
          <div className="item-second-product">
            <div className="image-wrapper">
              <img src={photo3} alt="" />
            </div>
            <div className="container-text-wrapper">
              <h4 className="h4">NervesNorm</h4>
              <p className="desc-product">
                Регулює функції нервової системи, нормалізує артеріальний тиск,
                уповільнює ритм та збільшує силу серцевих скорочень
              </p>
              <div
                className="btn-main-collection light-btn"
                onClick={() => history.push("/card-product/17")}
              >
                <span>Перейти до товару</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
