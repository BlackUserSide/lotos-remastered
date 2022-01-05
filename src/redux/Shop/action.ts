import { IDataProd } from "./../../components/ShopPage/type";
import { RootState } from "./../rootReducer";
import {
  getAllProduct,
  getCategory,
  getSubCategory,
} from "./../../components/api/shop";
import {
  SET_ACTIVE_CATEGORY,
  SET_ACTIVE_FILTER,
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
    dispatch(setLoaderProducts(true));
    const { shop } = getState() as RootState;
    let newShop: IDataProd[] = [];
    switch (filter) {
      case 3:
        newShop = shop.dataShop.sort(compareFunctionFilter);
        dispatch({ type: SET_ACTIVE_FILTER, payload: 1 });
        break;
      case 2:
        dispatch({ type: SET_ACTIVE_FILTER, payload: 2 });
        break;
      case 1:
        newShop = shop.dataShop.sort(compareFunctionFilterDown);
        dispatch({ type: SET_ACTIVE_FILTER, payload: 3 });
        break;
      default:
        dispatch(getProductsWrapper());
        dispatch({ type: SET_ACTIVE_FILTER, payload: 0 });
        newShop = [];
    }
    dispatch({ type: SET_FILTER_PRODUCTS, payload: newShop });
    setTimeout(() => {
      dispatch(setLoaderProducts(false));
    }, 500);
  };
};

const compareFunctionFilter = (a: any, b: any) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
};
const compareFunctionFilterDown = (a: any, b: any) => {
  if (a.price > b.price) {
    return -1;
  }
  if (a.price < b.price) {
    return 1;
  }
  return 0;
};
export const categoryFilter = (id: number) => {
  return (dispatch: any, getState: () => RootState) => {
    dispatch(setLoaderProducts(true));
    const { shop } = getState();
    const filterArr = shop.dataShop.filter((e) => e.categoryId === id);
    console.log(id);

    dispatch({ type: SET_FILTER_PRODUCTS, payload: filterArr });
    dispatch({ type: SET_ACTIVE_CATEGORY, payload: id });
    setTimeout(() => {
      dispatch(setLoaderProducts(false));
    }, 500);
  };
};

export const subCotegoryFilter = (id: number) => {
  return (dispatch: any, getState: () => RootState) => {
    dispatch(setLoaderProducts(true));
    const { shop } = getState();
    const filterArr = shop.dataShop.filter(
      (e) => e.subcategoryId === id && e.categoryId === shop.activeCategory
    );
    dispatch({ type: SET_FILTER_PRODUCTS, payload: filterArr });
    setTimeout(() => {
      dispatch(setLoaderProducts(false));
    }, 500);
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

    dispatch({ type: SET_SUB_CATEGORY_WRAPPER, payload: data });
  };
};
export const clearFilterCategory = () => {
  return (dispatch: any) => {
    dispatch({ type: SET_FILTER_PRODUCTS, payload: [] });
    dispatch({ type: SET_ACTIVE_CATEGORY, payload: 0 });
    dispatch({ type: SET_SUB_CATEGORY_WRAPPER, payload: [] });
  };
};
export const clearSubCategory = () => {
  return { type: SET_SUB_CATEGORY_WRAPPER, payload: [] };
};
