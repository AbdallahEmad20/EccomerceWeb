import React, { useRef } from 'react'
import  ImageLogo from "../../Assets//logo2_194x.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faFilePowerpoint, faGift, faHeart, faPersonPregnant, faSurprise, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openModel } from '../../Model/ModelSlice'
const Navigation  = () => {
const Mynav =useRef()
const cart=useSelector(state=>state.cart)
  const dispatch =useDispatch()

// side nav open

const openMyNav =useRef(null) 
const myul =useRef(null)
  function openNav(){
    openMyNav.current.classList.toggle("fa-xmark")
    myul.current.classList.toggle("showw")
  }


  return (
    <div>
        {/* Start my Navbar */}
<Navbar ref={Mynav}  id="NavMe" expand="lg" >
      <Container>


        <Navbar.Brand href="/">
            <img   src={ImageLogo}/>
        </Navbar.Brand>


        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto me-auto">
         
        

<input type='search' placeholder='Enter Keywords here...'/>
  
           

          </Nav>
        </Navbar.Collapse>




    

<div className="devaianav">

<div className="iconsDiv">

<div className="iconss Cartt d-flex align-items-center">
<div className="d-flex align-items-center iconsCart ">
<Link to='/cart' style={{color:"black"}}><FontAwesomeIcon icon={faCartShopping}/></Link> 
<span>{cart.length}</span>

</div>



<button>check out</button>
</div>





       <div className="iconss d-flex align-items-baseline">
       <FontAwesomeIcon  onClick={()=>dispatch(openModel('loginRegister'))}   icon={faUserCheck}/>
       <div className="data-icons">
    
       <div className="sign">
        <a  onClick={()=>dispatch(openModel('login')) } style={{fontWeight:"500"  ,color:"#d31a22" , cursor:"pointer"}}  >Login</a>
        <p style={{fontSize:"20px"}}>/</p>
      <a onClick={()=>dispatch(openModel('register'))} style={{fontWeight:"500"  ,color:"#d31a22" ,  cursor:"pointer"}} >Register</a>
        </div>
       </div>
      
       </div>


        </div>

{/*  my icon toogle */}
<i  className="fa-solid fa-bars Barss" ref={openMyNav}  onClick={()=>openNav()}></i>


    
</div>


     
      </Container>

    </Navbar>


<div className="List">
<div className="container">
<div className="menuu">
<Link to="/">Home</Link>
            <Link to="/products">Shop</Link>
            <Link href="#link">Features</Link>
            <Link href="#link">Blog</Link>
            <Link href="#link">About</Link>
            <Link href="#link">Contact</Link>
</div>

<div className="special-offer">
<FontAwesomeIcon icon={faGift}/>
  <a>Special Offer</a>
</div>
</div>
</div>
      
      
{/* side nav */}


<ul className="myul" ref={myul}>
<div className="menuu">
<Link to="/">Home</Link>
            <Link to="/products">Shop</Link>
            <Link href="#link">Features</Link>
            <Link href="#link">Blog</Link>
            <Link href="#link">About</Link>
            <Link href="#link">Contact</Link>
</div>


</ul>

{/*  End side nav */}

    </div>
  )
}

export default  Navigation
