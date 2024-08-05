import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss'

import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import Show from './Pages/Show'
import ContactInfo from './Components/ContactInfo'

function App() {

  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/clothes' element={<Index />}/>
      <Route path='/clothes/:id' element={<Show />}/>
        {/* <Route path=''element={}/> */}
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
