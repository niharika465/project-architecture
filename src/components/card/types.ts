import { Product } from 'types';

export type CardOwnProps = {
  product: Product;
  handleClick: (id: number) => void;
};
