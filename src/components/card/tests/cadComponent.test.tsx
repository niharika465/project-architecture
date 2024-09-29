import { render, screen, fireEvent } from '@testing-library/react';
import CardComponent from '../cardComponent';
import { IMAGE_HEIGHT, IMAGE_WIDTH } from '../../../constant';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  image: 'https://example.com/image.jpg',
  price: 10,
  description: 'Test product description',
  category: 'Mens',
  rating: { rate: 4, count: 10 },
};

const mockHandleClick = jest.fn();

describe('CardComponent', () => {
  beforeEach(() => {
    render(
      <CardComponent product={mockProduct} handleClick={mockHandleClick} />
    );
  });

  it('renders the product title', () => {
    const titleElement = screen.getByText(/Test Product/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(
      <CardComponent product={mockProduct} handleClick={mockHandleClick} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the product image', () => {
    const imageElement = screen.getByRole('img', { name: /Test Product/i });
    expect(imageElement).toHaveAttribute('src', mockProduct.image);
    expect(imageElement).toHaveAttribute('height', IMAGE_HEIGHT);
    expect(imageElement).toHaveAttribute('width', IMAGE_WIDTH);
  });

  it('calls handleClick with the correct id when clicked', () => {
    const cardElement = screen
      .getByText(/Test Product/i)
      .closest('div') as HTMLDivElement;
    fireEvent.click(cardElement);
    expect(mockHandleClick).toHaveBeenCalledWith(mockProduct.id);
  });
});
