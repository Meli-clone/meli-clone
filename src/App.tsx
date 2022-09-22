import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './views/Home';
import Login from './views/Login';
import SearchResults from './views/SearchResults';
import ProdructDetails from './views/ProductDetails';
import Cart from './views/Cart';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/search_results/:search' element={<SearchResults />} />
        <Route path='/product_details/:product' element={<ProdructDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
