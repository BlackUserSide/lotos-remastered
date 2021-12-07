import React from "react";
import { useHistory } from "react-router";

export const MainShop: React.FC = () => {
  const history = useHistory();
  return (
    <div className="main-shop-wrapper">
      <div className="container-main-shop">
        <div className="text-composition">
          <h2 className="h2">Отримай знижку</h2>
          <p>Приєднуйтесь в якості постійного клієнта і заощаджуйте до 30%</p>
          <div className="btn-shop-main" onClick={() => history.push("/login")}>
            <span>Приєднатись</span>
          </div>
        </div>
      </div>
    </div>
  );
};
