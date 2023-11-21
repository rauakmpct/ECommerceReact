import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Header from './Component/layoutes/Header'
import Footer from './Component/layoutes/Footer'
import Shop from './Component/Shop'
import ShopDetails from './Component/ShopDetails'
import Pages from './Component/Pages'
import Contact from './Component/Contact'
import Cart from './Component/Cart'
import Checkout from './Component/Checkout'

function App() {
  return (
    <>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopdetails" element={<ShopDetails />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    
      <Footer />

    </>




  )
}

export default App