import React from 'react'
import "./Footer.css"
import MyLogo  from "../Assets/logo2_194x.png"
import pament from "../Assets/pament.png"

const Footer = () => {
  return (
    <div className='FooterFinal'>



      <div  className="footOne">
   
   <div className="container">
    <div className="row">
    <div className="contnetFootOne col-lg-6 col-md-6 col-sm-12">
        <h4>Follow Socials</h4>
      <span><i className="fa-brands fa-dribbble"></i></span>
       <span><i className="fa-brands fa-facebook"></i></span>
       <span><i className="fa-brands fa-twitter"></i></span>
       <span><i className="fa-brands fa-google-plus-g"></i></span>
       <span><i className="fa-brands fa-pinterest"></i></span>
       <span><i className="fa-brands fa-instagram"></i></span>


        </div>
        <div className="SearchFooterr col-lg-6 col-md-6 col-sm-12">
  
        <input type='email' name="email" placeholder='Enter your Eamil'/>
           <button type='submit'>Get $10 off</button>
        </div>

        </div>
         </div>

    </div>



    <footer className="  text-lg-start">

  <div className="container p-4">
   
    <div className="row">
     
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4 mb-md-0">
        <a className=" firstt" ><img  src={MyLogo}/></a>

        <ul className="list-unstyled">
          <li>
            < h5 className="MyColor">Almirt Online the relase etras thats sheets continig passag.</h5>
          </li>
          <li>
            < h5 className="MyColor"> Address : PO Box W75 Street</h5>
          </li>
          <li>
            < h5 className="MyColor">Phone : +24 1245 654 235</h5>
          </li>
          <li>
            < h5 className="MyColor">Email : info@exemple.com</h5>
          </li>
        </ul>
      </div>
     
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="textunique">About Alimart</h5>

        <ul className="list-unstyled  specialdic ">
          <li className='Linkss'>
            <a href="#!" className="MyColor">Shipping & Returns</a>
        
          </li>
        
          <li className='Linkss'>
            <a href="#!" className="MyColor">Secure Shopping</a>
      
          </li>
          <li className='Linkss'>
            <a href="#!" className="MyColor">Order Status</a>
           
          </li>
          <li className='Linkss'>
            <a href="#!" className="MyColor">International Shipping</a>
          
          </li>
          
          <li className='Linkss'>
            <a href="#!" className="MyColor">Payment Method</a>
         
          </li>
          <li className='Linkss'>
            <a href="#!" className="MyColor">About Us</a>
         
          </li>
        </ul>
      </div>
      

      <div className="col-xl-3 col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="textunique">Information</h5>

        <ul className="list-unstyled  specialdic ">
          <li className='Linkss'>
            <a href="#!" className="MyColor">Shipping & Returns</a>
        
          </li>
        
          <li className='Linkss'>
            <a href="#!" className="MyColor">Secure Shopping</a>
      
          </li>
          <li className='Linkss'>
            <a href="#!" className="MyColor">Order Status</a>
           
          </li>
          <li className='Linkss'>
            <a href="#!" className="MyColor">International Shipping</a>
          
          </li>
          
          <li className='Linkss'>
            <a href="#!" className="MyColor">Payment Method</a>
         
          </li>
          <li className='Linkss'>
            <a href="#!" className="MyColor">About Us</a>
         
          </li>
        </ul>
      </div>


      <div className="col-xl-3 col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="textunique"> Our Services</h5>

        <ul className="list-unstyled  specialdic ">
          <li className='Linkss'>
            <a href="#!" className="MyColor">Shipping & Returns</a>
        
          </li>
        
          <li className='Linkss'>
            <a href="#!" className="MyColor">Secure Shopping</a>
      
          </li>
          <li className='Linkss'>
            <a href="#!" className="MyColor">Order Status</a>
           
          </li>
          <li className='Linkss'>
            <a href="#!" className="MyColor">International Shipping</a>
          
          </li>
          
          <li className='Linkss'>
            <a href="#!" className="MyColor">Payment Method</a>
         
          </li>
          <li className='Linkss'>
            <a href="#!" className="MyColor">About Us</a>
         
          </li>
        </ul>
      </div>
   

 
    </div>

  </div>
 


</footer>

<div className="footFinall">
 
<div className="container">


<div className="row">


<div className=" cardss  col-lg-4 col-md-6">
   <img width={"100%"} src={pament}/>
   </div>


   <div className="  copyRight col-lg-8 col-md-6">
   <p>SS AliMart © 2019 Demo Store. All Rights Reserved. Designed by SmartAddons.com</p>
    

   </div>


</div>

</div>

  </div>




   </div>

  )
}

export default Footer
