import { Product } from 'types';
import './singleProduct.scss';
import { capitalizeFirstLetterOfEachWord } from '../../helpers';
import { Chips } from '../../components/chips';

type OwnProps = {
  product: Product;
};

const SingleProductComponent = ({ product }: OwnProps) => {
  const { image, title, price, category, description, rating } = product;
  return (
    <div style={{ padding: '10px' }}>
      {/* if wants to have inline styling */}
      {product && product?.id && (
        <div className="product">
          <div>
            <img src={image} alt={title} className="product__img" />
          </div>
          <div>
            <h2>{title}</h2>
            <div className="product__info">
              <Chips label={price.toString()} color="green" />
              <Chips
                label={capitalizeFirstLetterOfEachWord(category)}
                color="orange"
              />
            </div>
            <p>{description}</p>
            <div>Rating: {rating.rate}/ 5</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductComponent;
