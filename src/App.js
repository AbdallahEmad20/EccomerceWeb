import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Home from './components/Home/Home'
import Model from './Model/Model';
import Footer from './Footer/Footer';
import  Navbar  from './components/Navvbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import ProductDetails from './ProductDetails/ProductDetails';
import ScrollBtnTop from './components/ScrollBtnTop/ScrollBtnTop';
import"./App.css"

const App = () => {

 



  const [loading  , SetLoading] =useState(false);

  useEffect(()=>{
    SetLoading(true)
  
    setTimeout(()=>{
      SetLoading(false)
   
    },1000)
  } ,[])
  return (
    <div>
 {
      loading?
    <div className='preloaderr'>
  
  <span className="loader">Load&nbsp;ng</span>

    </div>:


<>
<Navbar/>
  <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/cart'element={<Cart/>}></Route>
      <Route path='/products'element={<Products/>}></Route>
      <Route path='products/:myid'element={<ProductDetails/>}></Route>

  </Routes>

<Model/>
<Footer/> 
<ScrollBtnTop/>

</>
}
    </div>
  )
     
}

export default App
