import { put, call } from 'redux-saga/effects';
import {
  FetchProductDataErrorAction,
  FetchSingleProductDataAction,
  FetchSingleProductDataSuccessAction,
  ProductReduxActionTypes,
} from '../../types';

import { getCallWithCustomHeaders } from '../utils/getCallWithCustomHeaders';

export function* fetchSingleProductData(
  action: FetchSingleProductDataAction
): Generator<any, void, any> {
  const {
    payload: { id },
  } = action;

  try {
    const response = yield call(getCallWithCustomHeaders, `/products/${id}`);
    yield put<FetchSingleProductDataSuccessAction>({
      type: ProductReduxActionTypes.FETCH_SINGLE_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    if (error instanceof Error) {
      yield put<FetchProductDataErrorAction>({
        type: ProductReduxActionTypes.FETCH_PRODUCTS_ERROR,
        error: error.message,
      });
    } else {
      yield put<FetchProductDataErrorAction>({
        type: ProductReduxActionTypes.FETCH_PRODUCTS_ERROR,
        error: 'An unknown error occurred',
      });
    }
  }
}
