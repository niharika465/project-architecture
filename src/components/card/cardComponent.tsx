import { IMAGE_HEIGHT, IMAGE_WIDTH } from '../../constant';
import './card.scss';
import { CardOwnProps } from './types';

const CardComponent = ({ product, handleClick }: CardOwnProps) => {
  const { id, title, image } = product;
  return (
    <div className="card" key={id} onClick={() => handleClick(id)}>
      <h2 className="card__name">{title}</h2>
      <img src={image} alt={title} height={IMAGE_HEIGHT} width={IMAGE_WIDTH} />
    </div>
  );
};

export default CardComponent;
