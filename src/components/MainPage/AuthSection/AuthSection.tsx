import React from "react";
import "./authsection.sass";
export const AuthSection: React.FC = () => {
  return (
    <div className="auth-section-wrapper">
      <div className="container-wrapper-section">
        <h2 className="h2">Розпочни свій шлях с Lotos вже сьогодні!</h2>
        <p className="text-auth">
          Тут можуть бути коротко описані переваги авторизації чи реєстрації
        </p>
        <div className="btn-main-collection green-btn">
          <span>Дивитись продукцію</span>
        </div>
      </div>
    </div>
  );
};
