import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { ItemShop } from "../../ShopPage/DataItemShop/ItemShop";
import { IDataProd } from "../../ShopPage/type";
import "./minishop.sass";
export const MiniShop: React.FC = () => {
  const dataShop = useSelector((state: RootState) => state.shop.dataShop);
  const [dataShopWrap, setDataShopWrapp] = React.useState<IDataProd[]>([]);
  React.useEffect(() => {
    let newArr: IDataProd[] = [];
    for (let i = 0; i < 12; i++) {
      if (dataShop[i]) {
        newArr.push(dataShop[i]);
      }
    }

    setDataShopWrapp(newArr);

    return;
  }, [dataShop]);
  return (
    <div className="mini-shop-main-wrapper">
      <div className="container-shop-mini">
        <div className="top-line">
          <h2 className="h2">Сьогодні у продажу</h2>
        </div>
        <div className="list-item-wrapper">
          {dataShopWrap.map((e, i) => (
            <ItemShop content={e} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
