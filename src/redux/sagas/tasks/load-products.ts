import { put, call } from 'redux-saga/effects';
import {
  FetchProductDataErrorAction,
  FetchProductDataSuccessAction,
  ProductReduxActionTypes,
} from '../../types';

import { getCallWithCustomHeaders } from '../utils/getCallWithCustomHeaders';
import { Product } from 'types';

export function* fetchProductData(): Generator<any, void, any> {
  try {
    const response = yield call(getCallWithCustomHeaders, '/products');

    yield put<FetchProductDataSuccessAction>({
      type: ProductReduxActionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: response.data as Product[],
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
