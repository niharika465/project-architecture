import { Product } from 'types';
import './productList.scss';
import { Card } from '../../components/card';

type OwnProps = {
  products: Product[] | [];
  handleClick: (id: number) => void;
};

const ProductListComponent = ({ products, handleClick }: OwnProps) => {
  return (
    <div style={{ padding: '10px' }}>
      {/* if wants to have inline styling */}
      <div className="container">
        {products.length > 0 &&
          products.map((item) => {
            return (
              <Card key={item.id} product={item} handleClick={handleClick} />
            );
          })}
      </div>
    </div>
  );
};

export default ProductListComponent;
