import { takeLatest } from 'redux-saga/effects';
import { fetchProductData } from './tasks/load-products';
import { ProductReduxActionTypes } from '../types';
import { fetchSingleProductData } from './tasks/load-single-product';

export function* productSaga() {
  yield takeLatest(ProductReduxActionTypes.FETCH_PRODUCTS, fetchProductData);
  yield takeLatest(
    ProductReduxActionTypes.FETCH_SINGLE_PRODUCT,
    fetchSingleProductData
  );
}
