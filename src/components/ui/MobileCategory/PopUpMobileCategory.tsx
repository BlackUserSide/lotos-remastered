import React, { useContext, useEffect, useState } from "react";

import { ShopContext } from "../../ShopPage/ShopContext/ShopContext";
import closeIcon from "../../../img/close-icon.png";
import backIcon from "../../../img/back-ico.png";
import "./popupcategory.sass";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import {
  clearFilterCategory,
  clearSubCategory,
  getSubCategoryAction,
} from "../../../redux/Shop/action";
type TProps = {
  setActiveMobileCat: React.Dispatch<React.SetStateAction<boolean>>;
};
export const PopUpMobileCategory: React.FC<TProps> = ({
  setActiveMobileCat,
}) => {
  const dataCategory = useSelector((state: RootState) => state.shop.category);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeSubCategory, setSubActiveCategory] = useState<number | null>(
    null
  );

  const dataSubCategory = useSelector(
    (state: RootState) => state.shop.subCategory
  );
  const { catergoryFilter, subCategoryFilter } = useContext(ShopContext);
  const dispatch = useDispatch();
  const [activeSub, setActiveSub] = useState<number>(0);
  useEffect(() => {
    if (activeCategory !== null) {
      dispatch(getSubCategoryAction(activeCategory));
    }
  }, [activeCategory, dispatch]);

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
      dispatch(clearSubCategory());
    }
  };
  const changeSubCategory = (id: number) => {
    if (subCategoryFilter) {
      setActiveSub(id);
      subCategoryFilter(id);
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
            onClick={() => dispatch(clearFilterCategory())}
          >
            <p>Все</p>
          </div>
          {dataSubCategory?.length >= 1
            ? dataSubCategory.map((e, i) => (
                <div
                  className="list-item-category"
                  onClick={() => {
                    setSubActiveCategory(e.id);
                  }}
                  key={i}
                >
                  <p>{e.name}</p>
                </div>
              ))
            : dataCategory.map((e, i) => (
                <div
                  className={`list-item-category ${
                    activeSub === e.id ? "active-sub-wrapper" : ""
                  }`}
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
            if (activeSubCategory !== null) {
              changeSubCategory(activeSubCategory);
            }
            setActiveMobileCat(false);
          }}
        >
          <span>Зберегти</span>
        </div>
      </div>
    </div>
  );
};
