import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';

import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from './Pages/Show';
import Cart from './Pages/Cart';
import UpdateDatabase from './Pages/UpdateDatabase';

import ContactInfo from './Components/ContactInfo';


function App() {
  const [cart, setCart] = useState({ totalItems: 0, pieces: [] });


  return (
    <>
      <Navbar quantity={cart.totalItems} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/products' element={<Index />} />
          <Route path='/products/:type' element={<Show cart={cart} setCart={setCart} />} />
          <Route path='/products/cart' element={<Cart cart={cart} setCart={setCart} />} />
          <Route path='/billing-details' element={<UpdateDatabase cart={cart} setCart={setCart} />}/>
          {/* <Route path='/payments' element={<PaymentDetails />}/> */}
          {/* <Route path="*" element={<FourOFour />} /> */}
        </Routes>
      </main>

      <footer>
        <ContactInfo />
      </footer>
    </>
  )
};

export default App;
