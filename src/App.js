import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/main/Dashboard';
import Admin from './components/Admin';
import './App.css'
import Categories from './components/main/catalog/Categories'
import Product from './components/main/catalog/Product';
import Layout from './components/main/design/Layout';
import Theme from './components/main/design/Theme';

import Language from './components/main/design/Language';
import Order from './components/main/sales/Order';
import Recurring from './components/main/sales/Recurring';
import Return from './components/main/sales/Return';

import Login from './Login';
import Filter from './components/main/catalog/Filter';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/admin" element={<Admin/>}>
          <Route exact path='/admin' element={<Dashboard/>} />
          <Route path='/admin/catalog/categories' element={<Categories/>}/>
          <Route path='/admin/catalog/product' element={<Product/>}/>
          <Route path='/admin/catalog/filter' element={<Filter/>}/>
          <Route path='/admin/design/layout' element={<Layout/>}/>
          <Route path='/admin/design/theme' element={<Theme/>}/>
          <Route path='/admin/design/language' element={<Language/>}/>
          <Route path='/admin/sales/order' element={<Order/>}/>
          <Route path='/admin/sales/recurring' element={<Recurring/>}/>
          <Route path='/admin/sales/return' element={<Return/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;


