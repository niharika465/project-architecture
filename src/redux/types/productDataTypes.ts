import { Product, SingleProductPayload } from 'types';

export enum ProductReduxActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',

  FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT',
  FETCH_SINGLE_PRODUCT_SUCCESS = 'FETCH_SINGLE_PRODUCT_SUCCESS',
}

export type FetchProductDataAction = {
  type: ProductReduxActionTypes.FETCH_PRODUCTS;
};

export type FetchProductDataSuccessAction = {
  type: ProductReduxActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
};

export type FetchProductDataErrorAction = {
  type: ProductReduxActionTypes.FETCH_PRODUCTS_ERROR;
  error: string;
};

export type FetchSingleProductDataAction = {
  type: ProductReduxActionTypes.FETCH_SINGLE_PRODUCT;
  payload: SingleProductPayload;
};

export type FetchSingleProductDataSuccessAction = {
  type: ProductReduxActionTypes.FETCH_SINGLE_PRODUCT_SUCCESS;
  payload: Product;
};

export type ProductActionTypes =
  | FetchProductDataAction
  | FetchProductDataSuccessAction
  | FetchProductDataErrorAction
  | FetchSingleProductDataAction
  | FetchSingleProductDataSuccessAction;
