import React, { useEffect, useState } from "react";
import { getCategory, getSubCategory } from "../../api/shop";
import { ICategory, ISubCategory } from "./type";

export const CategoryWrapper: React.FC = () => {
  const [dataCategory, setDataCategory] = useState<ICategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [dataSubCategory, setDataSubCategory] = useState<ISubCategory[]>();
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
  return (
    <div className="category-wrapper">
      <div className="top-line">
        <h4 className="h4">Категорії</h4>
      </div>
      <div className="list-wrapper-category">
        {dataCategory.map((e, i) => (
          <div className="item-list-wrapper" key={i}>
            <p
              onClick={() => {
                changeActiveCategory(e.id);
              }}
            >
              {e.name}
            </p>

            {activeCategory === e.id ? (
              <div className="hidden-list-category">
                {dataSubCategory?.map((s, i) => (
                  <>
                    <span key={i}>{s.name}</span>
                  </>
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
