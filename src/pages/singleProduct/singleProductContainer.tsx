import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import SingleProductComponent from './singleProductComponent';
import { Product } from 'types';

export const SingleProductContainer = () => {
  const { product } = useSelector((state: RootState) => state.productData);

  return <SingleProductComponent product={product as Product} />;
};
