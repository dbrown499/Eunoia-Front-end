import React, { useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss'

import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import Show from './Pages/Show'
import Cart from './Pages/Cart'

import ContactInfo from './Components/ContactInfo'

function App() {
  const [cart, setCart] = useState({totalItems: 0, pieces: []})

  return (
    <>
    <header>
      <Navbar quantity={cart.totalItems}/>
    </header>
    <main>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/clothes' element={<Index />}/>
      <Route path='/clothes/:type' element={<Show cart={cart} setCart={setCart}/>}/>
      <Route path='/clothes/cart' element={<Cart  quantity={cart.totalItems} items={cart.pieces}/>}/> 
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
