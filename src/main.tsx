import ReactDOM from 'react-dom/client';
import App from './app';
import { Provider } from 'react-redux';
import store from './redux/store';
import ErrorBoundary from './errorBoundary/errorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);
