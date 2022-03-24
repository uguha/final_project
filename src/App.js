import React from 'react';
import { Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import SubCategories from './components/SubCategories';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Dev from './components/Dev';

import './css/default.css';
import './css/index.css';
import './css/App.css';
import './css/cart.css';

export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <div className="container">
          <Routes>
              <Route path='/' element={ <HomePage/> } />
              <Route path='/cart' element={ <Cart/> } />
              <Route path='/dev' element={ <Dev/> } />
              <Route path='/:category' element={ <SubCategories/> }/>
              <Route path='/:category/:subcategory' element={ <Products/> }/>
              <Route path='/:category/:subcategory/:id' element={ <Product/> }/>
          </Routes>
        </div>
      </main>
    </div>
  );
}
