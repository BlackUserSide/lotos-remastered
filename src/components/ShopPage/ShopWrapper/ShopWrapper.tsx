import React, { useContext, useEffect, useState } from "react";
import "./shopwrapper.sass";
//mport search from "../../../img/iconHeader/search.png";
import { DataItemShop } from "../DataItemShop/DataItemShop";
import { ShopContext } from "../ShopContext/ShopContext";
import { PopUpMobileCategory } from "../../ui/MobileCategory/PopUpMobileCategory";
export const ShopWrapper: React.FC = () => {
  const [activeMobileCat, setActiveMobileCat] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [activeFilterWrapper, setActiveFilter] =
    useState<string>("За замовчуванням");
  const { activeFilter, changeFilter } = useContext(ShopContext);
  const changeActive = () => {
    if (active) {
      setActive(false);
      return;
    }
    setActive(true);
  };
  const catChanger = () => {
    if (activeMobileCat) {
      setActiveMobileCat(false);
      return;
    }
    setActiveMobileCat(true);
  };
  useEffect(() => {
    if (activeFilter) {
      console.log(activeFilter);

      switch (activeFilter) {
        case 1:
          setActiveFilter("За замовчуванням");
          break;
        case 2:
          setActiveFilter("За популярністю");
          break;
        case 3:
          setActiveFilter("За збільшенням ціни");
          break;
        case 4:
          setActiveFilter("За зменшенням ціни");
          break;
      }
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
                          changeFilter(1);
                          setActive(false);
                        }}
                      >
                        За замовчуванням
                      </span>
                      <span
                        onClick={() => {
                          changeFilter(2);
                          setActive(false);
                        }}
                      >
                        За популярністю
                      </span>
                      <span
                        onClick={() => {
                          changeFilter(3);
                          setActive(false);
                        }}
                      >
                        За збільшенням ціни
                      </span>
                      <span
                        onClick={() => {
                          changeFilter(4);
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
