import React, { useEffect, useState } from 'react'
import "./Products.css"
import { useDispatch, useSelector } from 'react-redux'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchProduct } from '../../rtk/ProductSlice'
import Product from '../Product/Product'

const Products = () => {


  const dispatch = useDispatch()
  const {myproducts}=useSelector(state=>state.products)
useEffect(()=>{
  dispatch(fetchProduct())
   },[])

   // start pagination
const items =7
const [current , setCurrent] =useState(1)
const NPage =Math.ceil(myproducts.length / items)
const startIndex=(current -1) *items
const endIndex=startIndex + items
const DataPerPage =myproducts.slice(startIndex , endIndex)
const pani= (page)=>{
  setCurrent(page)

}
// End Pagination
    return (
    <div className='Products'>
      
      <div className="container">

  <div className="pageProducts row">


<div className='col-xl-3 col-lg-3  A col-md-12'>

<section className="right-shop" >

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

</section>


</div>

<div className='col-xl-9 col-lg-9  col-md-12'>


<section className="left-shop" >
  
<div className="row">
  {
    DataPerPage.map(item=>(
   <div key={item.id} className=' productt  col-xl-3  col-lg-4  col-md-4  col-sm-6'>
          <Product item={item}/>
   </div>
    ))
  }

<div className="MyPAgination">
<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
  {
    Array.from({length :NPage} , (_ , i)=>i+1).map((page , index)=>(
      <button   onClick={()=>pani(page)} className='page-link' key={index}>{page}</button>
    ))
  }
    <li className="page-item">
      <a className="page-link" href="" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>

</div>

</section>

</div>





  </div>

      </div>

    </div>
  )
}

export default Products
