import { SingleProductPayload } from 'types';
import { ProductReduxActionTypes } from '../types';

export const fetchProductData = () => {
  return {
    type: ProductReduxActionTypes.FETCH_PRODUCTS,
  };
};

export const fetchSingleProductData = ({ id }: SingleProductPayload) => {
  return {
    type: ProductReduxActionTypes.FETCH_SINGLE_PRODUCT,
    payload: { id },
  };
};
