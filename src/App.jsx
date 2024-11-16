import React, { useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss'

import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import Show from './Pages/Show'
import Cart from './Pages/Cart'

import ContactInfo from './Components/ContactInfo'
import ShoppingCartIcon from './Components/ShoppingCartIcon';

function App() {
  const [cart, setCart] = useState({totalItems: 0, pieces: []});
 

  return (
    <>
      <Navbar quantity={cart.totalItems}/>
    <main>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/products' element={<Index />}/>
      <Route path='/products/:type' element={<Show cart={cart} setCart={setCart}/>}/>
      <Route path='/products/cart' element={<Cart  quantity={cart.totalItems} items={cart.pieces} cart={cart} setCart={setCart}/>}/> 
        {/* <Route path=''element={}/>  */}
      </Routes>
    </main>
   
     <footer>
      <ContactInfo />
      </footer> 
    </>
  )
}

export default App
