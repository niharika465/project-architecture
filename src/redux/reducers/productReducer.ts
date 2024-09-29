import { Product } from 'types';
import { ProductActionTypes, ProductReduxActionTypes } from '../types';

export type ApiDataFetchInitialState = {
  productList: Product[] | [];
  product: Product | {};
  loading: boolean;
  error: string;
};

const InitialValues: ApiDataFetchInitialState = {
  productList: [],
  loading: false,
  error: '',
  product: {},
};

export const productData = (
  state: ApiDataFetchInitialState = InitialValues,
  action: ProductActionTypes
): ApiDataFetchInitialState => {
  switch (action.type) {
    case ProductReduxActionTypes.FETCH_PRODUCTS:
      return { ...state, loading: true };
    case ProductReduxActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, productList: action.payload };
    case ProductReduxActionTypes.FETCH_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.error };
    case ProductReduxActionTypes.FETCH_SINGLE_PRODUCT:
      return { ...state, loading: true };
    case ProductReduxActionTypes.FETCH_SINGLE_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    default:
      return state;
  }
};

export default productData;
