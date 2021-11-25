import React, { useCallback, useContext, useEffect, useState } from "react";
import { getCategory, getSubCategory } from "../../api/shop";
import { ICategory, ISubCategory } from "../../ShopPage/CategoryWrapper/type";
import { ShopContext } from "../../ShopPage/ShopContext/ShopContext";
import closeIcon from "../../../img/close-icon.png";
import backIcon from "../../../img/back-ico.png";
import "./popupcategory.sass";
type TProps = {
  setActiveMobileCat: React.Dispatch<React.SetStateAction<boolean>>;
};
export const PopUpMobileCategory: React.FC<TProps> = ({
  setActiveMobileCat,
}) => {
  const [dataCategory, setDataCategory] = useState<ICategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [dataSubCategory, setDataSubCategory] = useState<ISubCategory[]>([]);
  const { catergoryFilter, clearFilterCategory } = useContext(ShopContext);
  const updateCategory = useCallback(() => {
    console.log(1);

    getCategory()
      .then((res) => {
        if (res) {
          setDataCategory(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    updateCategory();
  }, [updateCategory]);
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
  const changeCategory = () => {
    if (catergoryFilter) {
      if (activeCategory) {
        catergoryFilter(activeCategory);
      }
    }
  };
  const backHandler = () => {
    if (activeCategory !== null) {
      setActiveCategory(null);
      setDataSubCategory([]);
      updateCategory();
    }
  };
  return (
    <div className="pop-up-mobile-category">
      <div className="bg-lock" onClick={() => setActiveMobileCat(false)}></div>
      <div className="pop-up-cat-mobile">
        <div className="close-icon">
          <img
            src={closeIcon}
            alt=""
            onClick={() => setActiveMobileCat(false)}
          />
        </div>
        {dataSubCategory.length >= 1 ? (
          <div className="back-icon-wrapper">
            <img src={backIcon} onClick={backHandler} alt="" />
          </div>
        ) : (
          ""
        )}
        <div className="top-line">
          <p>
            {dataSubCategory.length >= 1
              ? dataCategory.map((e) => {
                  if (e.id === activeCategory) {
                    return e.name;
                  }
                  return "";
                })
              : "Категорії"}
          </p>
        </div>
        <div className="list-mobile-category">
          <div
            className="list-item-category"
            onClick={() => (clearFilterCategory ? clearFilterCategory() : "")}
          >
            <p>Все</p>
          </div>
          {dataSubCategory?.length >= 1
            ? dataSubCategory.map((e, i) => (
                <div
                  className="list-item-category"
                  onClick={() => {
                    changeActiveCategory(e.id);
                  }}
                  key={i}
                >
                  <p>{e.name}</p>
                </div>
              ))
            : dataCategory.map((e, i) => (
                <div
                  className="list-item-category"
                  onClick={() => {
                    changeActiveCategory(e.id);
                  }}
                  key={i}
                >
                  <p>{e.name}</p>
                </div>
              ))}
        </div>
        <div
          className="btn-save-wrapper"
          onClick={() => {
            changeCategory();
          }}
        >
          <span>Зберегти</span>
        </div>
      </div>
    </div>
  );
};
