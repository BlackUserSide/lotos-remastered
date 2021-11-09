import React from "react";

export const CategoryWrapper: React.FC = () => {
  return (
    <div className="category-wrapper">
      <div className="top-line">
        <h4 className="h4">Категорії</h4>
      </div>
      <div className="list-wrapper-category">
        <div className="item-list-wrapper">
          <p>Для здоров’я</p>
          <div className="hidden-list-category">
            <span>Все</span>
            <span>Від болю печінки</span>
          </div>
        </div>
      </div>
    </div>
  );
};
