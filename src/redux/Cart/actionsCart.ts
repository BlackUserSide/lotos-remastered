import { IActionCart } from "./type";
import { IOrderCartMain } from "./../../components/CartPage/type";
import { getCartProducts } from "./../../components/api/shop";
import {
  GET_DATA_CART,
  GET_GOUNT_CART,
  SET_FULL_PRICE_CART,
} from "./actionsConst";
import { TDataCart } from "./../../components/CartContext/CartContext";
export const getCountCart = (count: number) => {
  return {
    type: GET_GOUNT_CART,
    payload: count,
  };
};
export const getDataCart = () => {
  return async (dispatch: any) => {
    const data = localStorage.getItem("cart");
    if (data !== null) {
      const obj: TDataCart[] = JSON.parse(data);
      const arrId = obj.map((e) => {
        return e.id;
      });
      const response: IOrderCartMain[] = await getCartProducts(arrId).then(
        (res) => {
          if (res) {
            return res.data;
          }
        }
      );
      const count = obj.length;
      dispatch(getCountCart(count));
      dispatch(getFullPrice(response));
      dispatch({
        type: GET_DATA_CART,
        payload: response,
      });
    } else {
      dispatch(getCountCart(0));
      dispatch({
        type: GET_DATA_CART,
        payload: [],
      });
    }
  };
};
export const addToCart = (id: number, amount: number) => {
  return async (dispatch: any) => {
    const dataCartLocal = localStorage.getItem("cart");
    if (dataCartLocal !== null) {
      const data: TDataCart[] = JSON.parse(dataCartLocal);
      let findElement: TDataCart | undefined = data.find((e) => e.id === id);
      if (findElement) {
        findElement = { ...findElement, amount: findElement.amount + amount };
        //data.push(findElement);
        const newData = data.filter((e) => e.id !== id);
        newData.push(findElement);
        localStorage.setItem("cart", JSON.stringify(newData));
        dispatch(getDataCart());
      } else {
        data.push({ id: id, amount: amount, sale: false });
        localStorage.setItem("cart", JSON.stringify(data));
        dispatch(getDataCart());
      }
    } else {
      let data: TDataCart[] = [{ id: id, amount: amount, sale: false }];
      localStorage.setItem("cart", JSON.stringify(data));
      dispatch(getDataCart());
    }
  };
};

export const deleteCartProduct = (id: number) => {
  return (dispathc: any) => {
    const data = localStorage.getItem("cart");
    if (data !== null) {
      const json: TDataCart[] = JSON.parse(data);
      const newData = json.filter((e) => e.id !== id);
      localStorage.setItem("cart", JSON.stringify(newData));
      dispathc(getDataCart());
    }
  };
};
export const clearCart = () => {
  return (dispatch: any) => {
    localStorage.removeItem("cart");
    dispatch(getDataCart());
  };
};
export const changeAmounCart = (id: number, amount: number) => {
  return (dispatch: any) => {
    const data: string | null = localStorage.getItem("cart");
    if (data) {
      const parseData: TDataCart[] = JSON.parse(data);
      const findElemtn = parseData.find((e) => e.id === id);
      let newCartItem: TDataCart | null = null;
      if (findElemtn) {
        newCartItem = {
          id: findElemtn.id,
          amount: amount,
          sale: false,
        };
      }
      const newData = parseData.filter((e) => e.id !== id);
      if (newCartItem !== null) {
        newData.push(newCartItem);
        localStorage.setItem("cart", JSON.stringify(newData));
        dispatch(getDataCart());
      }
    }
  };
};
const getFullPrice = (dataCart: IOrderCartMain[]) => {
  const data = localStorage.getItem("cart");
  if (data !== null) {
    const parseData: TDataCart[] = JSON.parse(data);
    let tmpPrice = 0;
    dataCart.map((e) => {
      parseData.map((t) => {
        if (t.id === e.id) {
          if (e.discount !== null) {
            tmpPrice += e.discount * t.amount;
          } else {
            tmpPrice += e.price * t.amount;
          }
          return t;
        }
      });
      return e;
    });

    return {
      type: SET_FULL_PRICE_CART,
      payload: tmpPrice,
    } as IActionCart;
  }
};
