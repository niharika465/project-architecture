import CardComponent from './cardComponent';
import { CardOwnProps } from './types';

export const CardContainer = ({ product, handleClick }: CardOwnProps) => {
  return <CardComponent product={product} handleClick={handleClick} />;
};
