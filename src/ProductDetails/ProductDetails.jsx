import React, { useEffect } from 'react'
import "./ProductDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { ProDetails, fetchProduct } from '../rtk/ProductSlice'
import { Link, useParams } from 'react-router-dom'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ClipLoader from "react-spinners/ClipLoader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import SwiperNavButtons from '../SwiperNavButtons'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from '../rtk/CartSlice'
import myBanner from "../Assets/sidebar-banner.avif" 
import  Banner1 from "../Assets/banner-02.avif"
import  Banner2 from "../Assets/banner-03.avif"
import  Banner3 from "../Assets/banner-04.avif"

import Product from '../components/Product/Product'


const ProductDetails = () => {
    const dispatch = useDispatch()
    const {myproducts , detail , isloading}=useSelector(state=>state.products)
 
  useEffect(()=>{
    dispatch(fetchProduct())
    dispatch(ProDetails(params.myid))

     },[])

     const notify = (detail) => {
      dispatch(addToCart(detail))
        
        // toast.success("Add To Cart Process", {
        //   position: toast.POSITION.LEFT_CENTER,
                
        // });
    
    
      };
    

  
     const params =useParams()
//  images carsoul
     const images = [
      `${ detail.images&&detail.images[0]}`,
      `${ detail.images&&detail.images[1]}`,
      `${ detail.images&&detail.images[2]}`,
      `${ detail.images&&detail.images[3]}`,
         ];
       


  return (
    <div className='ProductDetails'>
 
      <div className="container">

<div className="pageProducts row">


<section className="right-shop  col-xl-3 col-lg-3  A col-md-12" >

<div className="mycategories">
<h1>CATEGORIES</h1>
<div className="categories-content">
 <a href="">Home page</a>
 <p>(14)</p>
</div>

<div className="categories-content">
 <a href="">Apple watch</a>
 <p>(15)</p>
</div>

<div className="categories-content">
 <a href="">Bedroom</a>
 <p>(16)</p>
</div>

<div className="categories-content">
 <a href="">Furniture</a>
 <p>(17)</p>
</div>

<div className="categories-content">
 <a href="">smartphone</a>
 <p>(18)</p>
</div>

<div className="categories-content">
 <a href="">Shoes</a>
 <p>(19)</p>
</div>
</div>

<div className="mycategories">
<h1>FEATURED PRODUCTS</h1>

{
myproducts.slice(7,10).map(item=>(

<div key={item.id} className="">

<div className="cardaia">
<div className="cardImage">
<img width={"60px"} height={"60px"} src={item.images && item.images[4] || item.images[0]} />
</div>
<div className="contentCard">

<p className='discription'>{item.description.slice(0 ,25)}</p>
<div className="myIcons d-flex align-items-center">
<FontAwesomeIcon icon={faStar}/>
<FontAwesomeIcon icon={faStar}/>
<FontAwesomeIcon icon={faStar}/>
<FontAwesomeIcon icon={faStar}/>
<FontAwesomeIcon icon={faStar}/>
</div>
<div>
<p style={{fontSize:"15px" , fontWeight:"bold"}}>{item.price}$</p>
</div>

</div>
</div>



</div>
))
}




</div>

<div  className="DivImg">

<img  src={myBanner}/>
</div>

</section>

<section className="left-shop  col-xl-9 col-lg-9  A col-md-12" >

<div className="row">


<div className="col-xl-6 col-md-12 ">
<div className='Div1'  >
  <div className="box">
    <Carousel useKeyboardArrows={true}>
      {images.map((URL, index) => (
        <div className="slide" key={index} >
          <img alt="sample_file" src={URL} />
        </div>
      ))}
    </Carousel>
  </div>
</div>

</div>

<div className="col-xl-6 col-md-12  content-div">
<div className='contentSec'>

<p style={{color:"#444" , fontSize:"17px" , marginTop:"25px" , textAlign:"left" , fontWeight:"700"}}>Fine quality Branded Product Keep in a cool and dry place </p>

<div className="Product-Details">

<div className='d-flex DetailContent'>
  <h5>Rating :</h5>
  <h5>{detail.rating}</h5>
</div>
<div className="myIcons d-flex align-items-center mt-3">
<FontAwesomeIcon icon={faStar}/>
<FontAwesomeIcon icon={faStar}/>
<FontAwesomeIcon icon={faStar}/>
<FontAwesomeIcon icon={faStar}/>
<FontAwesomeIcon icon={faStar}/>
</div>

</div>



<div className='priceDiv'>

<p style={{fontWeight:"400" , color:"#000"  ,textAlign:"left"}} >{detail.description}</p>
<span className='d-flex align-items-baseline' > <h6 style={{textDecoration:"line-through"  , fontSize:"20px"}}>${detail.stock} </h6>  <p style={{marginLeft:"10px" , fontWeight:"400" , fontSize:"20px" }}>(inclusive of all taxes)</p></span>

<div className='divaiaa d-flex align-items-center'>
<p style={{fontSize:"25px" , fontWeight:"bold" , color:"gold"}}>${detail.price} </p> 
<p className='p'>{detail.discountPercentage}% off</p>
</div>
</div>


<div className='btns'>

<button className='btnAddCart' onClick={ ()=>notify(detail)} ><FontAwesomeIcon icon={faShoppingCart} className='iconia'/> addToCart</button>
  <button className='btnBuy'> <Link to='/cart' style={{color:"#fff" , textDecoration:"none"}}>View Cart</Link></button>

</div>
</div>

</div>




</div>


<div className="photoss" style={{margin:"40px 0"}}>
 <div className="container">
  <div className="row">

  <div className="col-lg-4 col-md-4 mt-3">
    <img width={"100%"} src={Banner1}/>
  </div>

  <div className="col-lg-4 col-md-4 mt-3">
    <img width={"100%"} src={Banner2}/>
  </div>

  <div className="col-lg-4 col-md-4 mt-3">
    <img width={"100%"} src={Banner3}/>
  </div>
  </div>
 </div>

</div>


<div className="mySliderr2">


<Swiper
    slidesPerView={4}
    spaceBetween={10}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    breakpoints={{

0:{
  slidesPerView:1,
  spaceBetween:10
},
527:{
  slidesPerView:2,
  spaceBetween:10
},

768:{
  slidesPerView:3,
  spaceBetween:10
},


1024:{
  slidesPerView:3,
  spaceBetween:10
},



1280:{
  slidesPerView:4,
  spaceBetween :10
},

    }}
    navigation={true}
    modules={[FreeMode , Pagination]}
    className="mySwiper wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s"
      >
   
        {
          isloading ?

<div className='preloaderr2'>
  
  <ClipLoader  className='scaleLoad' color={"#000"}  size={70} height={100} margin={10}  />
    </div>:
myproducts.slice(5 ,13).map(item=>(
          <SwiperSlide key={item.id}>
          <Product item={item}/>
          </SwiperSlide>     
         )) 

}

<SwiperNavButtons/>


      </Swiper>

</div>






</section>
    
    </div>
    </div>
    </div>
  )
}

export default ProductDetails
