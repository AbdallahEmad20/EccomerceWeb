import React from 'react'
import { ErrorMessage, Field, Formik   , Form} from 'formik';
import "./Login&Reg.css"
import loginSchema from "../Schema/Login"
import Loginn  from '../rtk/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
 export const Login = () => {


  
const dispatch =useDispatch()

  async function LoginHandeler (values){



  
    }
  
  



  return (
    <div>


    <div className="login-box">
    <h1>Login </h1>
    <Formik
       initialValues={{
         email: '',
         password:''
       }}
       validationSchema={loginSchema}
       onSubmit={LoginHandeler}
     >

    <Form action="">

 
    <label >Email</label>
    <Field type="email"  name='email'  placeholder="Email"/>
<span><ErrorMessage name='email'/></span>
    

    <label >Password</label>
    <Field type="password" name='password' placeholder="Password"/>
    <span><ErrorMessage name='password'/></span>

<button type='submit'>Login </button>
    
  </Form>
  </Formik>

  </div>
  <p className="para-2">
    Not have an account? <a href="index.html">Signup  here</a>
   </p>
    </div>
  )
}

export default Login
