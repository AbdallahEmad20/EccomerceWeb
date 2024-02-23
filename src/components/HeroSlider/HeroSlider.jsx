import React from 'react'
import Slider from "react-slick";
import "./HeroSlider.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../Assets/slider_1-2_x1024.webp"
import image2 from "../../Assets/slideshow-h2-2_17eff863-1981-4e18-a93c-08f9da4fb0d4_x1024.webp"
import image3 from "../../Assets/slideshow_x1024.webp"

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        arrows: false,
      
      };
  return (
 
    <div className='SliderPage'>



<div className='slider-content'>
<Slider className='sli' {...settings}>
   
  

   <div className='slider-item'>  
          <img  src={image1}/>
          <div className="contentdiv">
            <h5>
              Digital <span style={{color:"#d31a22"}}>Super zoom</span> camera </h5>
              <h2>You've never seen <br/>a watch like this.</h2>
              <button>BUY NOW</button>
          </div>
          </div>
          
          <div  className='slider-item'>  
 <img     src={image2}/>
      
          </div>
          

          
   <div className='slider-item '>  
          <img   src={image3}/>
      
          <div className="contentdiv">
            <h5>
              Digital <span style={{color:"#d31a22"}}>Super zoom</span> camera </h5>
              <h2>capure all the moments</h2>
              <button>BUY NOW</button>
          </div>
          </div>


        </Slider>

        </div>

      
    </div>


  )
}

export default HeroSlider
