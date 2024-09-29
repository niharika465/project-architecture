import { SingleProduct } from './pages/singleProduct';
import { ProductList } from './pages/productList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './app.scss';

const App = () => {
  // in order to see how error boundary works, uncomment the below line
  // throw new Error('An error occurred!');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        {/* Wildcard route to redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
