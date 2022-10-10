import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './views/Home';
import Login from './views/Login';
import SearchResults from './views/SearchResults';
import ProductDetails from './views/ProductDetails';
import Cart from './views/Cart';
import Register from './views/Register';
import PageNotFound from './components/PageNotFound';
import { store } from './store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/search_results/:search' element={<SearchResults />} />
          <Route
            path='/product_details/:productID'
            element={<ProductDetails />}
          />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
