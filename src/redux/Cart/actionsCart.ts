import { GET_DATA_CART, GET_GOUNT_CART } from "./actionsConst";
import { TDataCart } from "./../../components/CartContext/CartContext";
export const getCountCart = (count: number) => {
  return {
    type: GET_GOUNT_CART,
    payload: count,
  };
};
export const getDataCart = () => {
  return (dispatch: any) => {
    const data = localStorage.getItem("cart");
    if (data !== null) {
      const obj: TDataCart[] = JSON.parse(data);
      const count = obj.length;
      dispatch(getCountCart(count));
      dispatch({
        type: GET_DATA_CART,
        payload: obj,
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
      console.log(data, "test-data");
      let findElement: TDataCart | undefined = data.find((e) => e.id === id);

      if (findElement) {
        findElement = { ...findElement, amount: findElement.amount + amount };
        //data.push(findElement);
        const newData = data.filter((e) => e.id !== id);
        newData.push(findElement);
        localStorage.setItem("cart", JSON.stringify(newData));
        dispatch(getDataCart());
      } else {
        data.push({ id: id, amount: amount });
        localStorage.setItem("cart", JSON.stringify(data));
        dispatch(getDataCart());
      }
    } else {
      let data = [{ id: id, amount: amount }];
      localStorage.setItem("cart", JSON.stringify(data));
      dispatch(getDataCart());
    }
  };
};

export const deleteCartProduct = (id: number) => {
  return (dispathc: any) => {
    const data = localStorage.getItem("cart");
    if (data) {
      const json: TDataCart[] = JSON.parse(data);
      const newData = json.filter((e) => e.id !== id);
      localStorage.setItem("cart", JSON.stringify(newData));
      dispathc(getDataCart);
    }
  };
};
