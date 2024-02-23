import React from 'react'
import  "./Hero.css"
import HeroSlider from '../HeroSlider/HeroSlider'
import  oneImage from "../../Assets/banner_1.avif"
import TwoImage from "../../Assets/banner_2.avif"
import collimage1 from"../../Assets/colection-1.webp"
import collimage2 from"../../Assets/colection-8.png"
import collimage3 from"../../Assets/light_5c79d674-e5dc-42dd-947f-2a9eacf98e9b.webp"
import collimage4 from"../../Assets/colection-2.webp"
import collimage5 from"../../Assets/colection-9.webp"
import collimage6 from"../../Assets/gift_f67e77a4-475e-44c5-8694-ce633ac49d65.webp"
import collimage7 from"../../Assets/colection-6.png"
import collimage8 from"../../Assets/colection-4.avif"
import collimage9 from"../../Assets/E_3_342c59f3-25ad-4df4-af4f-78fb38b23f6e_500x_crop_center.webp"

const myData =[
    {
      image: collimage1,
      cato:"Smartphone"
    },
    
    {
      image :collimage2,
      cato:"Smartwatch"
    } ,
  
    {
      image :collimage3,
      cato:"lights"
    },
    
    {
      image :collimage4,
      cato:"  Laptop & Accessories"
    },  
  
  
    {
      image :collimage5,
      cato:"Smartphone"
    },  
  
    {
      image :collimage6,
      cato:"Gifts"
    },  
  
    {
      image: collimage7,
      cato:"Headphones"
    },  
  
  
    {
      image :collimage8,
      cato:"Chair"
    },  
    {
      image :collimage9,
      cato:"smartphones"
    },  
  ]
const Hero = () => {
  return (

    <div className='Hero'>

<div className="myHero">




<div className="container">
    <div className="row">


<div className=" myswiperr col-xl-8 col-lg-12 ">
<HeroSlider/>

<div className="TwoImages">
<div className="row">
<div className="col-lg-6 col-sm-6 ">
        <div className="imagia">
        <img  style={{width:"100%"}} src={oneImage}/>
        </div>
    </div>

    <div className="col-lg-6 col-sm-6 ">
        <div className="imagia">
        <img style={{width:"100%"}}  src={TwoImage}/>

        </div>
    </div>
</div>

</div>
</div>


{/*  another dev */}
<div className="col-xl-4 col-lg-12 ProductsImages ">

<div className="row">

{
    myData.map((item , index)=>(
        <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-6 ">
<div className="pic">
    <img  src={item.image} />
    <p>{item.cato}</p>
</div>
</div>
    ))
}




</div>


</div>


    </div>
</div>






</div>


  </div>
  )
}

export default Hero
