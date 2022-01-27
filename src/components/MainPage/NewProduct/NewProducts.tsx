import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { ItemShop } from "../../ShopPage/DataItemShop/ItemShop";
import { IDataProd } from "../../ShopPage/type";
import "./newproduct.sass";
export const NewProducts = () => {
  const [dataShopState, setDataShopState] = React.useState<IDataProd[]>([]);
  let dataShop = useSelector((state: RootState) => state.shop.dataShop);
  React.useEffect(() => {
    let newArr = [];
    let reverseData = dataShop.reverse();
    for (let i = 0; i < dataShop.length - 1; i++) {
      if (reverseData[i]) {
        if (i <= 3) {
          newArr.push(reverseData[i]);
        }
      }
    }
    setDataShopState(newArr);
  }, [dataShop]);
  return (
    <div className="new-products-wrapper">
      <div className="top-line">
        <h2 className="h2">Нові продукти</h2>
      </div>
      <div className="container-new-products">
        {dataShopState.map((e, i) => (
          <ItemShop content={e} />
        ))}
      </div>
    </div>
  );
};
