import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import {
  categoryFilter,
  clearFilterCategory,
  getSubCategoryAction,
  subCotegoryFilter,
} from "../../../redux/Shop/action";

export const CategoryWrapper: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<number | null>(
    null
  );
  console.log(activeSubCategory);
  const dataCategory = useSelector((state: RootState) => state.shop.category);
  const dispatch = useDispatch();
  useEffect(() => {
    if (activeCategory !== null) {
      dispatch(categoryFilter(activeCategory));
      dispatch(getSubCategoryAction(activeCategory));
    }
  }, [activeCategory, dispatch]);
  const dataSubCategory = useSelector(
    (state: RootState) => state.shop.subCategory
  );
  const changeActiveCategory = (id: number) => {
    if (activeCategory === id) {
      setActiveCategory(null);
      return;
    }
    setActiveCategory(id);
  };
  const changeSubCategory = (id: number) => {
    setActiveSubCategory(id);
    dispatch(subCotegoryFilter(id));
  };
  return (
    <div className="category-wrapper">
      <div className="top-line">
        <h4 className="h4">Категорії</h4>
      </div>
      <div className="list-wrapper-category">
        <div
          className="item-list-wrapper"
          onClick={() => dispatch(clearFilterCategory())}
        >
          <p>Всі</p>
        </div>
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
