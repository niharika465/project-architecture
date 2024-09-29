import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductData, fetchSingleProductData } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import ProductListComponent from './productListComponent';
import { useNavigate } from 'react-router-dom';

export const ProductListContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const handleClick = (id: number) => {
    dispatch(fetchSingleProductData({ id }));
    navigate(`/products/${id}`);
  };

  const { productList } = useSelector((state: RootState) => state.productData);

  return (
    <ProductListComponent products={productList} handleClick={handleClick} />
  );
};
