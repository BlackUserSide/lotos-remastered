import { IDataProd } from "./../../components/ShopPage/type";
import { RootState } from "./../rootReducer";
import {
  getAllProduct,
  getCategory,
  getSubCategory,
} from "./../../components/api/shop";
import {
  SET_CATEGORY_WRAPPER,
  SET_FILTER_PRODUCTS,
  SET_ITEM_PRODUCTS,
  SET_LOADER_PRODUCTS,
  SET_SUB_CATEGORY_WRAPPER,
} from "./actionConst";
export const getProductsWrapper = () => {
  return async (dispatch: any) => {
    dispatch(setLoaderProducts(true));
    const data = await getAllProduct().then((res) => {
      if (res) {
        switch (res.status) {
          case 200:
            return res.data;
        }
      }
    });
    dispatch({ type: SET_ITEM_PRODUCTS, payload: data });
    setTimeout(() => {
      dispatch(setLoaderProducts(false));
    }, 500);
  };
};

const setLoaderProducts = (action: boolean) => {
  return { type: SET_LOADER_PRODUCTS, payload: action };
};

export const filterWrapper = (filter: number | null) => {
  return (dispatch: any, getState: () => RootState) => {
    const { shop } = getState() as RootState;
    let newShop: IDataProd[] = [];
    switch (filter) {
      case 1:
        newShop = shop.dataShop.sort(compareFunctionFilter);
        break;
      case 2:
        newShop = shop.dataShop.sort(compareFunctionFilterDown);
        break;
      default:
        newShop = [];
    }
    dispatch({ type: SET_FILTER_PRODUCTS, payload: newShop });
  };
};

const compareFunctionFilter = (a: any, b: any) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a должно быть равным b
  return 0;
};
const compareFunctionFilterDown = (a: any, b: any) => {
  if (a.price > b.price) {
    return -1;
  }
  if (a.price < b.price) {
    return 1;
  }
  // a должно быть равным b
  return 0;
};
export const categoryFilter = (id: number) => {
  return (dispatch: any, getState: () => RootState) => {
    const { shop } = getState();
    const filterArr = shop.dataShop.filter((e) => e.categoryId === id);
    dispatch({ type: SET_FILTER_PRODUCTS, payload: filterArr });
  };
};

export const subCategoryWrapper = (id: number) => {
  return (dispatch: any, getState: () => RootState) => {
    const { shop } = getState();
    const filterArr = shop.dataFilter.filter((e) => e.subcategoryId === id);
    dispatch({ type: SET_FILTER_PRODUCTS, payload: filterArr });
  };
};
export const getCategoryAction = () => {
  return async (dispatch: any) => {
    const data = await getCategory().then((res) => {
      if (res) {
        switch (res.status) {
          case 200:
            return res.data;
        }
      }
    });
    dispatch({ type: SET_CATEGORY_WRAPPER, payload: data });
  };
};
export const getSubCategoryAction = (id: number) => {
  return async (dispatch: any) => {
    const data = await getSubCategory(id).then((res) => {
      if (res) {
        switch (res.status) {
          case 200:
            return res.data;
        }
      }
    });
    dispatch({ type: SET_SUB_CATEGORY_WRAPPER, paload: data });
  };
};
