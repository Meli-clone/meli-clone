import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import MinimalLayout from '@/layout/MinimalLayout';
import Home from './views/Home';
import Login from './views/Login';
import SearchResults from './views/SearchResults';
import ProductDetails from './views/ProductDetails';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
import Register from './views/Register';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { store } from './store/store';
import { Provider } from 'react-redux';
import LoggedInValidation from './components/ProtectedRoutes/LoggedInValidation';
import CartRouteProtected from './components/ProtectedRoutes/CartRouteProtected';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<LoggedInValidation />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchResults />} />
          <Route
            path='/product_details/:productID'
            element={<ProductDetails />}
          />
          <Route element={<CartRouteProtected />}>
            <Route path='/cart' element={<Cart />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Route>
        <Route element={<CartRouteProtected />}>
          <Route element={<MinimalLayout />}>
            <Route path='/checkout' element={<Checkout />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
