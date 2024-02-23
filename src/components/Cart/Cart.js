import React from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { MinusQuan, PlusQuan, clearCart, removeFromCart } from '../../rtk/CartSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faMinus, faPlus, faShoppingBasket, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart =useSelector(state=>state.cart)
const dispatch =useDispatch()

// Total Prices in My Cart 
var TotalPrices =cart.reduce((acc , pro)=>{
  return acc+=(pro.price *pro.quantity) 
 } ,0)
 


 
 //  Open section  Empty Cart
const handala =()=>{
  dispatch(clearCart()) 
 
}


  return (
    <div className='CartPage'>


{ cart.length > 0  && TotalPrices > 0 ?
<div className='scrolaia'>

<div  className=' container cartPage'>
<h2 style={{fontWeight:"bold" , fontSize:"22px" , textAlign:"center" , padding:"20px 0"}}>Shopping Cart</h2>



<table  className='tablee'>
<thead>

<tr>
<th>PRODUCT DETAILS</th>
<th>UNIT PRICE</th>
<th>QUANTITY</th>
<th>Remove</th>
<th>AMOUNT</th>
<th></th>
</tr>


</thead>

<tbody>


{
    cart.map(productt=>(
        <tr key={productt.id}>
       <td className='SpetialTd'>
        <img width={"50px"} src={productt.images && productt.images[0]}/>
      <h4 style={{fontSize:"14px" , marginLeft:"5px"}}>{productt.title}</h4>
      </td>
      <td> <h4 style={{color:"gold"}}>{productt.price * productt.quantity}$</h4></td>
      <td>{productt.quantity }</td>

      <td><button className='RomoveBtn' onClick={()=>dispatch(removeFromCart(productt))} >Delete</button></td>


<td >

<div className='PlusAndMiuns' >
<button onClick={()=>dispatch(MinusQuan(productt))}><FontAwesomeIcon icon={faMinus}/> </button>
<button onClick={()=>dispatch(PlusQuan(productt))} ><FontAwesomeIcon icon={faPlus}/></button>
</div>

</td>


      </tr>        
       ))

    
        }


</tbody>

</table>



</div>

</div>

:


<div className='PageFinal'>
<div className="cartxy">
  <FontAwesomeIcon icon={faShoppingBasket}/>
<p>Your cart is currently empty.</p>
<Link to="/" >
  <button className="bttncarttt">Back to Home</button></Link>
</div>




  </div>





      }     






<div className='container'>

<div className='spetial'>
<button className='Clearbtn' onClick={handala}>
<FontAwesomeIcon icon={faTrash} style={{fontSize:"18px" , marginRight:"2px"}}/>
   CLEAR CART
</button>


<div className='Total'>
<span> <h5 style={{color:"#d31a22"}}>Total ({cart.length}items):</h5> <h5 className='speialH5'>${TotalPrices}</h5></span>
<button >CHECK OUT</button>
</div>

</div>

</div>


    </div>
  )
}

export default Cart
