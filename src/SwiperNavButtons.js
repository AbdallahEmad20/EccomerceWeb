import React from 'react'
import { useSwiper } from 'swiper/react'
import "./components/Home/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SwiperNavButtons = () => {
    const swiper =useSwiper()
  return (
    <>
    <div className='swiper-nav-btns'>
        <button onClick={()=>swiper.slidePrev()}><FontAwesomeIcon icon={faChevronRight} className='icons'/></button>
        <button onClick={()=>swiper.slideNext()}>< FontAwesomeIcon icon={faChevronLeft} className='icons'/></button>
    </div>
    </>
  )
}

export default SwiperNavButtons
