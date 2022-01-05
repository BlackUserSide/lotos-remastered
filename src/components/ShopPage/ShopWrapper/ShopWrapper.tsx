import React, { useContext, useEffect, useState } from "react";
import "./shopwrapper.sass";
//mport search from "../../../img/iconHeader/search.png";
import { DataItemShop } from "../DataItemShop/DataItemShop";
import { ShopContext } from "../ShopContext/ShopContext";
import { PopUpMobileCategory } from "../../ui/MobileCategory/PopUpMobileCategory";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { filterWrapper } from "../../../redux/Shop/action";
export const ShopWrapper: React.FC = () => {
  const [activeMobileCat, setActiveMobileCat] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [activeFilterWrapper, setActiveFilter] =
    useState<string>("За замовчуванням");
  const { changeFilter } = useContext(ShopContext);
  const changeActive = () => {
    if (active) {
      setActive(false);
      return;
    }
    setActive(true);
  };
  const dispatch = useDispatch();
  const activeFilter = useSelector(
    (state: RootState) => state.shop.activeFilter
  );
  const catChanger = () => {
    if (activeMobileCat) {
      setActiveMobileCat(false);
      return;
    }
    setActiveMobileCat(true);
  };
  useEffect(() => {
    switch (activeFilter) {
      case 0:
        setActiveFilter("За замовчуванням");
        break;
      case 2:
        setActiveFilter("За популярністю");
        break;
      case 1:
        setActiveFilter("За збільшенням ціни");
        break;
      case 3:
        setActiveFilter("За зменшенням ціни");
        break;
    }
  }, [activeFilter]);

  return (
    <div className="shop-wrapper">
      {changeFilter ? (
        <div className="container-wrapper-shop">
          <div className="main-item-wrapper-shop">
            <div className="container-filter">
              <div className="filter-wrapper">
                <div className="main-fillter">
                  <p onClick={changeActive}>
                    Сортування: <span>{activeFilterWrapper}</span>{" "}
                  </p>
                  {active ? (
                    <div className="hidden-wrapper">
                      <span
                        onClick={() => {
                          dispatch(filterWrapper(0));
                          setActive(false);
                        }}
                      >
                        За замовчуванням
                      </span>
                      <span
                        onClick={() => {
                          dispatch(filterWrapper(2));
                          setActive(false);
                        }}
                      >
                        За популярністю
                      </span>
                      <span
                        onClick={() => {
                          dispatch(filterWrapper(1));
                          setActive(false);
                        }}
                      >
                        За збільшенням ціни
                      </span>
                      <span
                        onClick={() => {
                          dispatch(filterWrapper(3));
                          setActive(false);
                        }}
                      >
                        За зменшенням ціни
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {/* <div className="search-wrapper">
            <div className="input-wrapper">
              <input type="text" name="search-shop" />
              <img src={search} alt="" />
            </div>
          </div> */}
            <div className="category-mobile-wrapper" onClick={catChanger}>
              <span>Категорії</span>
            </div>
          </div>
          <DataItemShop />
        </div>
      ) : (
        ""
      )}
      {activeMobileCat ? (
        <PopUpMobileCategory setActiveMobileCat={setActiveMobileCat} />
      ) : (
        ""
      )}
    </div>
  );
};
