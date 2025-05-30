
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './comp/Navbar';
import Products from './comp/Products/Products';
import Recipies from './comp/Dishes/Recipies';
import Users from './comp/Users/Users';
import FavItems from './comp/Cart';
import WishList from './comp/WishList';
import SingleProd from './comp/Products/SingleProd';

const App = () => {
  return (
    <>
      <Navbar />  
      <Routes>
        <Route path="/Products" element={<Products />} />
        <Route path="/Recipies" element={<Recipies />} />
        <Route path="/Users" element={<Users />} />
        <Route path='/Favitems' element={<FavItems />} />
        <Route path='/Products/:id' element={<SingleProd />}/>
        <Route path='/WishList' element={<WishList />} />

      </Routes>
    </>
  );
};

export default App;
