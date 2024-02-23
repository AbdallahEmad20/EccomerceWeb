import React from 'react'
import  "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import  test from "../../Assets/colection-9.webp"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../rtk/CartSlice'
import { Link } from 'react-router-dom'
const Product = ({item}) => {
  const dispatch =useDispatch()
  return (
    <div>
      
  


  <div className="product">
        <div className="ImageDiv">
        <img src={item.images && item.images[1] || item.images[0]} alt="" />
        <div className="Iocns-div">
        <span><Link to={`/products/${item.id}`}><FontAwesomeIcon icon={faEye} /></Link></span>
        <span><FontAwesomeIcon icon={faHeart} /></span>
        </div>

        </div>

        <div className="contentDiv">
           <p className='myTitle'>{item.description.slice(0,30)}.</p> 
    
           <div className="myIcons d-flex align-items-center">
   <FontAwesomeIcon icon={faStar}/>
   <FontAwesomeIcon icon={faStar}/>
   <FontAwesomeIcon icon={faStar}/>
  <FontAwesomeIcon icon={faStar}/>
  <FontAwesomeIcon icon={faStar}/>
  </div>

          <div className='d-flex  content-pro'>
     <p style={{fontSize:"17px" , fontWeight:"300" , textDecoration:"line-through" , color:"#aaa" }}>${item.stock}</p>
     <p style={{fontSize:"25px" , fontWeight:"500" ,  color:"#d31a22" ,marginLeft:"4px"}}>${item.price}</p>
     {/* <p style={{  fontWeight:"500" , color:"#d31a22"  , fontSize:"18px"}}>({item.discountPercentage}% off)</p> */}
    </div>

    <button onClick={()=>dispatch(addToCart(item))}>Add To cart <FontAwesomeIcon style={{marginLeft:"5px"}} icon={faShoppingCart} /></button>
        </div>
      </div>

  </div>


   
  )
}

export default Product
