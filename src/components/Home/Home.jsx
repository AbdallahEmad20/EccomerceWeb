
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, fetchCategoriesContent, fetchProduct } from '../../rtk/ProductSlice'
import  Navbar from "../Navvbar/Navbar"
import Hero from "../Hero/Hero"
import Product from '../Product/Product'
import  "./Home.css"
import ClipLoader from "react-spinners/ClipLoader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import SwiperNavButtons from '../../SwiperNavButtons'

// start  images 
import Banner4 from "../../Assets/banner_4.webp"
import Banner5 from "../../Assets/banner_5.webp"
import Banner6 from "../../Assets/banner_6.webp"
import Banner7 from "../../Assets/banner_7.webp"
import Banner8 from "../../Assets/banner_8.avif"
import Banner9 from "../../Assets/banner_9.avif"
import Banner10 from "../../Assets/banner_10.avif"
import Banner11 from "../../Assets/banner_11.avif"

import Banner  from "../../Assets/banner_3.webp"
import br1 from "../../Assets/br1_170x110.png"
import br2 from "../../Assets/br2_170x110.png"
import br3 from "../../Assets/br3_170x110.avif"
import br4 from "../../Assets/br4_170x110.avif"
import br5 from "../../Assets/br5_170x110.avif"
import br6 from "../../Assets/br6_170x110 (1).png"
import br7 from "../../Assets/br7_170x110.png"
import { faBars, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// End Images"
const Home = () => {







    const [mydropdown , setDropdown] =useState(false)
    const [open  , setOpen] =useState(true)
    const {myproducts, category, catoContent , isloading}=useSelector(state=>state.products)
    const dispatch =useDispatch()
   
    console.log("categories" , category)

    useEffect(()=>{
   dispatch(fetchProduct())
   dispatch(fetchCategories())
   dispatch(fetchCategoriesContent())
    },[])

const HandleProducts=(catoname)=>{
  setOpen(false)
    dispatch(fetchCategoriesContent(`${catoname}`))
 
}


  


    return (
    <div>
<Hero/>

<section className="secOne">

<div className="container">
<div className="buttons">
  <h2>Fashion & Accessories</h2>
  <div className="links">
    {   
  category.slice(0,5).map((catoname , index)=>(
    <a onClick={()=>HandleProducts(catoname)} key={index}>{catoname}</a>

  ))
    }
    <FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>setDropdown(!mydropdown)}  icon={faBars}/>
  </div>
</div>

{/* drowpdowns */}




{
  mydropdown &&
  <div className="dropdown-content">
  {   
  category.slice(0,5).map((catoname , index)=>(
    <a onClick={()=>HandleProducts(catoname)} key={index}>{catoname}</a>

  ))
    }
  </div>

}

<div className="row" style={{ marginTop:"30px"}}>


<div className="bannerr  col-xl-2">
  <img width={"100%"} src={Banner} alt="photo" />
</div>


<div className=" col-xl-10  mySliderr">

{/* <Slider  {...settings}> */}


<Swiper
    
    slidesPerView={3}
    spaceBetween={10}
    freeMode={true}
 
  
  pagination={{
      clickable: false,
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
    modules={[FreeMode , Pagination]}
    className="mySwiper wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s"
      >
   

        {
       isloading ?

<div className='preloaderr2'>
  
  <ClipLoader  className='scaleLoad' color={"#000"}  size={70} height={100} margin={10}  />
    </div>:

   open ?
myproducts.slice(0 , 5).map(item=>(
          <SwiperSlide key={item.id}>
          <Product item={item}/>
          </SwiperSlide>     
         )) 

         
    :catoContent.map(item=>(
      <SwiperSlide key={item.id}>
      <Product item={item}/>
      </SwiperSlide>

    ))
}

<SwiperNavButtons/>


      </Swiper>

</div>



</div>



<div className="devs">
<div className="row">
<div className="Banners col-lg-4 col-md-4">
  <img src={Banner4} alt="" />
</div>

<div className="Banners col-lg-4  col-md-4">
  <img src={Banner5} alt="" />
</div>

<div className="Banners col-lg-4  col-md-4">
  <img src={Banner6} alt="" />
</div>
</div>

</div>


</div>



</section>

<section className="secThree">
  <div className="container">
    <div className="Banner7 col-lg-12">
      <img src={Banner7} alt='Photo'/>
    </div>

{/* Swiper  */}

<div className="buttons ">
  <h2>Some Products</h2>

</div>


<div className="mySliderr2">


<Swiper
    slidesPerView={5}
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
  slidesPerView:5,
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
myproducts.slice(23 ,30).map(item=>(
          <SwiperSlide key={item.id}>
          <Product item={item}/>
          </SwiperSlide>     
         )) 

}

<SwiperNavButtons/>


      </Swiper>

</div>






{/* End swiper */}
  </div>
</section>

<section className="secFour">

<div className="container">
<Swiper
    
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
  slidesPerView:5,
  spaceBetween :10
},

    }}
    navigation={true}
    modules={[FreeMode , Pagination]}
    className="mySwiper wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s"
      >
<SwiperSlide>
<img src={br1}/>
</SwiperSlide>

<SwiperSlide>
<img src={br2}/>
</SwiperSlide>

<SwiperSlide>
<img src={br3}/>
</SwiperSlide>

<SwiperSlide>
<img src={br4}/>
</SwiperSlide>

<SwiperSlide>
<img src={br5}/>
</SwiperSlide>

<SwiperSlide>
<img src={br6}/>
</SwiperSlide>

<SwiperSlide>
<img src={br7}/>
</SwiperSlide>



      </Swiper>

</div>



</section>


{/* Start section Five */}

<section className="secFive">

<div className="container">
<Swiper
    
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
  spaceBetween :30
},

    }}
    navigation={true}
    modules={[FreeMode , Pagination]}
    className="mySwiper wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s"
      >
<SwiperSlide>
<div className="box">
  <div className="box-image">
  <img src={Banner8}/>
  </div>
  <h4>Electronics</h4>
</div>
</SwiperSlide>

<SwiperSlide>

<div className="box">
  <div className="box-image">
  <img src={Banner9}/>
  </div>
  <h4>Computers & Tablets</h4>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="box">
  <div className="box-image">
  <img src={Banner10}/>
  </div>
  <h4>Iwatch & Accessories</h4>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="box">
  <div className="box-image">
  <img src={Banner11}/>
  </div>
  <h4>furniture & Decors</h4>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="box">
  <div className="box-image">
  <img src={Banner9}/>
  </div>
  <h4>Computers & Tablets</h4>
</div>
</SwiperSlide>

<SwiperNavButtons/>

      </Swiper>

</div>



</section>

<section className="sectionsix">
  <div className="container">
  <div className="buttons ">
  <h2>Most Viewed Products</h2>

</div>
<div className="row">

{
  myproducts.slice(0,8).map(item=>(

<div key={item.id} className="col-xl-3 col-lg-4  A col-md-6">

<div className="cardaia">
<div className="cardImage">
  <img width={"120px"} height={"100px"} src={item.images && item.images[4] || item.images[0]} />
</div>
<div className="contentCard">

<p className='discription'>{item.description.slice(0,30)}</p>
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

  </div>
</section>

{/* End section Five */}
    </div>
  )
}

export default Home
