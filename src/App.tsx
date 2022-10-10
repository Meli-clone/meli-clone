import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './views/Home';
import Login from './views/Login';
import SearchResults from './views/SearchResults';
import ProductDetails from './views/ProductDetails';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
import Register from './views/Register';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/search_results/:search' element={<SearchResults />} />
        <Route path='/product_details/:product' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
