import { RootState } from "./../rootReducer";
import { IOrderCartMain } from "./../../components/CartPage/type";
import { getCartProducts } from "./../../components/api/shop";
import {
  ADD_SALE_ITEM,
  CLEAR_CART,
  DISABE_POP_SALE,
  DISABLE_POP_PROD_SALE,
  GET_DATA_CART,
  GET_GOUNT_CART,
  SAVE_SALE_ITEM,
  SET_ACTION_SALE,
  SET_ACTIVE_SALE,
  SET_FULL_PRICE_CART,
  SET_PROD_ITEM,
  SET_PROD_POP_SALE,
  SET_SUM_PROD_SALE,
  SHOW_POP_SALE,
} from "./actionsConst";
import { TDataCart } from "../../components/CartPage/ContextOrder/ContextOrder";

export const getCountCart = (count: number) => {
  return {
    type: GET_GOUNT_CART,
    payload: count,
  };
};
export const getDataCart = () => {
  return async (dispatch: any, getState: any) => {
    //dispatch({ type: TOGLE_LOADER, payload: true });
    const { cabinet } = getState() as RootState;
    const data = localStorage.getItem("cart");
    if (data !== null) {
      const obj: TDataCart[] = JSON.parse(data);
      const sorArr = obj.filter((e) => !e.sale && !e.prodSale);
      const arrId = sorArr.map((e) => {
        return e.id;
      });
      let response: IOrderCartMain[] = await getCartProducts(arrId).then(
        (res) => {
          if (res) {
            return res.data;
          }
        }
      );
      const newArr: IOrderCartMain[] = [];
      if (cabinet.auth) {
        obj.map((e) => {
          if (e.sale) {
            response.map((t) => {
              if (e.id === t.id) {
                newArr.push({
                  id: e.id,
                  price: t.price,
                  discount: t.discount,
                  name: t.name,
                  src: t.src,
                });
              }
              return t;
            });
          }
          return e;
        });
      }
      const count = obj.length;
      dispatch(getCountCart(count));
      const compare = (a: any, b: any) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      };

      dispatch({
        type: GET_DATA_CART,
        payload: response.sort(compare),
      });
      dispatch(getFullPrice());
      if (cabinet.auth) {
        dispatch({
          type: SAVE_SALE_ITEM,
          payload: newArr,
        });
        dispatch(getFullPrice());
        dispatch(getDataProdSale());
      }
    } else {
      dispatch(getCountCart(0));
      dispatch({
        type: GET_DATA_CART,
        payload: [],
      });
    }

    // setTimeout(() => {
    //   dispatch({ type: TOGLE_LOADER, payload: false });
    // }, 500);
  };
};
export const getDataProdSale = () => {
  return async (dispatch: any, getStore: any) => {
    const { cart } = getStore() as RootState;
    const localData = localStorage.getItem("cart");
    if (localData !== null) {
      const parseData: TDataCart[] = JSON.parse(localData);
      const findElement = parseData.find((e) => e.prodSale === true);
      if (findElement) {
        let response: IOrderCartMain[] = await getCartProducts([
          findElement.id,
        ]).then((res) => {
          if (res) {
            return res.data;
          }
        });
        let discountWrapper = 0;
        if (response[0].discount !== null) {
          discountWrapper = response[0].discount - cart.prodSaleSum;
        } else {
          discountWrapper = response[0].price - cart.prodSaleSum;
        }
        let formatResponse: IOrderCartMain = {
          id: response[0].id,
          src: response[0].src,
          price: response[0].price,
          discount: discountWrapper,
          name: response[0].name,
        };
        dispatch({
          type: SET_PROD_ITEM,
          payload: [formatResponse],
        });
        dispatch(getFullPrice());
      }
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
        data.push({
          id: id,
          amount: amount,
          sale: false,
          prodSale: false,
        });
        localStorage.setItem("cart", JSON.stringify(data));
        dispatch(getDataCart());
      }
    } else {
      let data: TDataCart[] = [
        { id: id, amount: amount, sale: false, prodSale: false },
      ];
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
    dispatch({ type: CLEAR_CART, payload: "" });
  };
};
export const changeAmounCart = (id: number, amount: number) => {
  return (dispatch: any) => {
    const data: string | null = localStorage.getItem("cart");
    if (data) {
      const parseData: TDataCart[] = JSON.parse(data);
      const findElemtn = parseData.find((e) => e.id === id && !e.sale);
      let newCartItem: TDataCart | null = null;
      if (findElemtn) {
        newCartItem = {
          id: id,
          amount: amount,
          sale: false,
          prodSale: false,
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
const getFullPrice = () => {
  return (dispatch: any, getState: any) => {
    const { cabinet, cart } = getState() as RootState;
    const data = localStorage.getItem("cart");
    if (data !== null) {
      const parseData: TDataCart[] = JSON.parse(data);
      let tmpPrice = 0;
      cart.dataCart.map((e) => {
        parseData.map((t) => {
          if (t.id === e.id && !t.sale && !t.prodSale) {
            if (e.discount !== null) {
              tmpPrice += e.discount * t.amount;
            } else {
              tmpPrice += e.price * t.amount;
            }
            return t;
          }

          return t;
        });

        return e;
      });

      const notSalePrice = tmpPrice;

      if (cabinet.auth) {
        //TODO Доделать условие при совершении покупки
        if (notSalePrice >= 1500) {
          dispatch({
            type: SET_ACTION_SALE,
            payload: { tensProcent: false, secondProcent: true },
          });
          tmpPrice = tmpPrice - (tmpPrice * 20) / 100;
          dispatch(activeSale());
          dispatch(setProdSum(notSalePrice));
          tmpPrice += cart.saleItemGift.length;
          cart.prodSale.map((e) => {
            if (e.discount !== null) {
              if (e.discount <= 0) {
                tmpPrice += 1;
              } else {
                tmpPrice += e.discount;
              }
            }
            return e;
          });
        } else {
          dispatch({
            type: SET_ACTION_SALE,
            payload: { tensProcent: true, secondProcent: false },
          });
          tmpPrice = tmpPrice - (tmpPrice * 10) / 100;
        }
      }
      dispatch({ type: SET_FULL_PRICE_CART, payload: +tmpPrice.toFixed(3) });
    }
  };
};
export const showPopSale = (action: boolean) => {
  return (dispatch: any) => {
    const localData = localStorage.getItem("cart");
    if (localData !== null) {
      const parseData: TDataCart[] = JSON.parse(localData);
      const filterElement = parseData.find((e) => e.sale === true);
      if (filterElement) {
        dispatch({ type: SHOW_POP_SALE, payload: false });
        dispatch(disablePopSale(true));
        dispatch(setPopProdSale());
      } else {
        if (!action) {
          dispatch(disablePopSale(true));
          dispatch(setPopProdSale());
        }
        dispatch({ type: SHOW_POP_SALE, payload: action });
      }
    }
  };
};
export const disablePopSale = (action: boolean) => {
  return { type: DISABE_POP_SALE, payload: action };
};
export const activeSale = () => {
  return (dispatch: any, getState: any) => {
    const { cart } = getState() as RootState;
    const localData = localStorage.getItem("cart");
    if (localData) {
      const parseData: TDataCart[] = JSON.parse(localData);
      const newSaleArray: IOrderCartMain[] = [];
      parseData.map((e: TDataCart) => {
        if (e.amount >= 3) {
          cart.dataCart.map((t) => {
            if (e.id === t.id) {
              newSaleArray.push(t);
            }
            return t;
          });
        }
        return e;
      });
      dispatch({ type: ADD_SALE_ITEM, payload: newSaleArray });
      dispatch(showPopSale(true));
    }
  };
};
export const saveSaleItem = (id: number) => {
  return (dispatch: any, getState: any) => {
    const { cart } = getState() as RootState;
    const localData = localStorage.getItem("cart");
    if (localData !== null) {
      const parseData: TDataCart[] = JSON.parse(localData);
      if (!cart.disablePopSale) {
        parseData.map((e) => {
          if (e.id === id && !e.sale) {
            parseData.push({
              id: e.id,
              amount: 1,
              sale: true,
              prodSale: false,
            });
            localStorage.setItem("cart", JSON.stringify(parseData));
          }
          return e;
        });
      }

      const newArr: IOrderCartMain[] = [];
      cart.dataCart.map((e) => {
        if (e.id === id) {
          newArr.push(e);
        }
        return e;
      });
      dispatch(showPopSale(false));

      dispatch({ type: SAVE_SALE_ITEM, payload: newArr });
    }
  };
};
export const removeItemSaleGift = (id: number) => {
  return (dispatch: any, getState: any) => {
    const { cart } = getState() as RootState;
    const localData = localStorage.getItem("cart");
    if (localData !== null) {
      const parse: TDataCart[] = JSON.parse(localData);
      const newParse = parse.filter((e) => e.id !== id && e.sale);
      localStorage.setItem("cart", JSON.stringify(newParse));
      const filterElement = cart.saleItemGift.filter((e) => e.id !== id);
      dispatch({ type: SAVE_SALE_ITEM, payload: filterElement });
    }
  };
};
const setProdSum = (notSalePrice: number) => {
  return async (dispatch: any, getState: any) => {
    const { cart } = getState() as RootState;
    const localData = localStorage.getItem("cart");
    if (cart.fullPrice !== 0) {
      if (localData !== null) {
        const parseData: TDataCart[] = JSON.parse(localData);
        const findElement = parseData.find((e) => e.prodSale);
        if (findElement) {
          dispatch({ type: SET_ACTIVE_SALE, payload: true });
        }
        if (cart.prodSaleSum === 0) {
          let tmpAmount: number = 0;
          cart.dataCart.map((e) => {
            parseData.map((t) => {
              if (e.id === t.id && !t.sale && !t.prodSale) {
                tmpAmount += t.amount;
              }
              return t;
            });
            return e;
          });

          await dispatch({
            type: SET_SUM_PROD_SALE,
            payload: notSalePrice / tmpAmount,
          });

          dispatch(setPopProdSale());
        }
      }
    } else {
      await dispatch({
        type: SET_SUM_PROD_SALE,
        payload: 0,
      });
    }
  };
};
const setPopProdSale = () => {
  return (dispatch: any, getState: any) => {
    const { cart } = getState() as RootState;
    const localData = localStorage.getItem("cart");
    if (!cart.disablePopProdSale && !cart.popUpSale && !cart.activeSale) {
      if (localData !== null) {
        const parseData: TDataCart[] = JSON.parse(localData);
        const findElement = parseData.find((e) => e.prodSale === true);
        if (findElement) {
          disableProdPopSale(true);
        } else {
          dispatch({ type: SET_PROD_POP_SALE, payload: true });
        }
      }
    } else {
      dispatch({ type: SET_PROD_POP_SALE, payload: false });
    }
  };
};
export const disableProdPopSale = (action: boolean) => {
  return (dispatch: any) => [
    dispatch({ type: DISABLE_POP_PROD_SALE, payload: action }),
  ];
};
export const addSaleProdItem = (id: number) => {
  return (dispatch: any) => {
    const localData = localStorage.getItem("cart");
    if (localData !== null) {
      const parseData = JSON.parse(localData);
      const newObj: TDataCart = {
        id: id,
        amount: 1,
        sale: false,
        prodSale: true,
      };
      parseData.push(newObj);
      localStorage.setItem("cart", JSON.stringify(parseData));
      dispatch(getDataCart());
    }
  };
};
