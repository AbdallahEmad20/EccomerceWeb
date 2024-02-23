import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import "./ScrollBtnTop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
const ScrollBtnTop = () => {
  return (
    <div className='scrollmyBtn'>
      <ScrollToTop smooth className='TopBtn' color='#fff'  viewBox="0 0 448 512"  svgPath="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"/>

    </div>
  )
}

export default ScrollBtnTop
