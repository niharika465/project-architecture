import { combineReducers } from 'redux';
import productData from './productReducer';

const rootReducer = combineReducers({
  productData,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
