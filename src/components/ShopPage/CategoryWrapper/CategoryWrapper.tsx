import React, { useContext, useEffect, useState } from "react";
import { getCategory, getSubCategory } from "../../api/shop";

import { ShopContext } from "../ShopContext/ShopContext";
import { ICategory, ISubCategory } from "./type";

export const CategoryWrapper: React.FC = () => {
  const [dataCategory, setDataCategory] = useState<ICategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [dataSubCategory, setDataSubCategory] = useState<ISubCategory[]>();
  const { catergoryFilter, clearFilterCategory, subCategoryFilter } =
    useContext(ShopContext);
  useEffect(() => {
    getCategory()
      .then((res) => {
        if (res) {
          setDataCategory(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (activeCategory !== null) {
      getSubCategory(activeCategory)
        .then((res) => {
          if (res) {
            setDataSubCategory(res.data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [activeCategory]);
  const changeActiveCategory = (id: number) => {
    if (activeCategory === id) {
      setActiveCategory(null);
      return;
    }
    setActiveCategory(id);
  };
  const changeCategory = (id: number) => {
    if (catergoryFilter) {
      if (activeCategory) {
        catergoryFilter(activeCategory);
      }
    }
  };
  const changeSubCategory = (id: number) => {
    if (subCategoryFilter) {
      subCategoryFilter(id);
    }
  };
  return (
    <div className="category-wrapper">
      <div className="top-line">
        <h4 className="h4">Категорії</h4>
      </div>
      <div className="list-wrapper-category">
        <div className="item-list-wrapper" onClick={clearFilterCategory}>
          <p>Всі</p>
        </div>
        {dataCategory.map((e, i) => (
          <div className="item-list-wrapper" key={i}>
            <p
              onClick={() => {
                changeActiveCategory(e.id);
                changeCategory(e.id);
              }}
            >
              {e.name}
            </p>

            {activeCategory === e.id ? (
              <div className="hidden-list-category">
                {dataSubCategory?.map((s, a) => (
                  <span key={a} onClick={() => changeSubCategory(s.id)}>
                    {s.name}
                  </span>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
