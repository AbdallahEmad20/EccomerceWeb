import React, { useState , useEffect } from 'react'
import "./Login&Reg.css"
import { ErrorMessage, Field, Formik  , Form} from 'formik'
import RegisterSchema from '../Schema/Register'
import Login from '../LoginAndRegister/Login'
import { Navigate } from 'react-router-dom'

const Register = () => {

//   const [pro  ,setPro] =useState([])

//   useEffect(()=>{
//     FetchData()
//   },[])
// async function FetchData (){
// const response = await fetch("https://ecommerce.routemisr.com/api/v1/users")
// const data  =await response.json();
// setPro(data.users)

//   }




  const  RegisterAccountHandler = async(values , {resetForm})=>{
  //  await  fetch("https://ecommerce.routemisr.com/api/v1/auth/signup" , {
  // delete : values.conpassword,  
  // method :"POST",
  //   body:JSON.stringify(values),
  //   headers :{
  //    "content-type":"application/json"  
  //   }    
  //   })
  

  //   console.log("my value sign up" , values)

  //   resetForm()
  //   return <Login/>

// console.log("pro" , pro)

    }
  
  

  return (
    <div>
      



      <div className="signup-box">
  <h1>Sign Up</h1>
  <Formik

initialValues={{
  name:"",
  email: '',
  phone :"",
  password:'',
  conpassword:"",
}}
validationSchema={RegisterSchema}
onSubmit={RegisterAccountHandler}

>
  <Form action="">
    <label >Name</label>
    <Field type="text" name='name' placeholder=" Enter Your Name"/>
<span><ErrorMessage name='name'/></span>


    <label >Email</label>
    <Field type="email"  name='email' placeholder="Email"/>
    <span><ErrorMessage name='email'/></span>

    <label > Phone</label>
    <Field type="tel" name='phone' placeholder="Enter Phone"/>
<span><ErrorMessage name='phone'/></span>


    <label >Password</label>
    <Field type="password" name='password' placeholder="Password"/>
<span><ErrorMessage name='password'/></span>
   
    <label > Confirm Password</label>
    <Field type="password" name='conpassword' placeholder="confirm Password"/>
<span><ErrorMessage name='conpassword'/></span>

{/* <input type="button" name='submit' value="Submit"/> */}
<button type='submit' variant="primary">Register</button>
   </Form>
 </Formik>

 </div>





 <p className="para-2">
  ALready have an account? <a href="login.html">Login here</a>
 </p>



      
    </div>
  )
}

export default Register
