import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./headercart.sass";
export const HeaderCart: React.FC = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [passedStep, setPassedStep] = useState<number[]>([]);

  useEffect(() => {
    const path = history.location.pathname.split("/");
    path.shift();

    if (path[0] === "cart") {
      switch (path[1]) {
        case "main":
          setActiveStep(0);
          break;
        case "delivery":
          setActiveStep(1);
          setPassedStep([0]);
          break;
        case "payment":
          setActiveStep(2);
          setPassedStep([0, 1]);
          break;
        case "done":
          setActiveStep(3);
          setPassedStep([0, 1, 2]);
          break;
      }
    }
  }, [history]);
  return (
    <div className="header-cart-wrapper">
      <div className="list-wrapper-main">
        <div
          className={`item-list-wrapper ${
            activeStep === 0 ? "active-step" : ""
          } ${
            passedStep.find((e) => e === 0) !== undefined ? "passed-step" : ""
          }`}
        >
          <span>Кошик</span>
        </div>
        <div
          className={`item-list-wrapper ${
            activeStep === 1 ? "active-step" : ""
          } ${
            passedStep.find((e) => {
              return e === 1;
            })
              ? "passed-step"
              : ""
          }`}
        >
          <span>Доставка</span>
        </div>
        <div
          className={`item-list-wrapper ${
            activeStep === 2 ? "active-step" : ""
          } ${
            passedStep.find((e) => {
              return e === 2;
            })
              ? "passed-step"
              : ""
          }`}
        >
          <span>Оплата</span>
        </div>
        <div
          className={`item-list-wrapper ${
            activeStep === 3 ? "active-step" : ""
          } ${
            passedStep.find((e) => {
              return e === 3;
            })
              ? "passed-step"
              : ""
          }`}
        >
          <span>Готово</span>
        </div>
      </div>
    </div>
  );
};
