import React from 'react'
import "./Model.css"
import Login from "../LoginAndRegister/Login"
import Register from "../LoginAndRegister/Register"
import { useDispatch, useSelector } from 'react-redux'
import { closedModel } from './ModelSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifiStrong, faXmark } from '@fortawesome/free-solid-svg-icons'
import LoginResidter from '../LoginAndRegister/LoginResidter'
const Model = () => {
const {isOpen , componentName} =useSelector(state=>state.Model)
const dispatch =useDispatch()
//  closeModel to use  any place


// const closeeModel = () =>{
//     dispatch(closedModel())
// }
console.log("is open" , isOpen)
console.log("ComponentNAme" , componentName)

const HandelerComponent =()=>{
    if(componentName === "login"){
        return <Login/>
        }else if(componentName === "register"){
        return <Register/>
        }
        else if(componentName === "loginRegister"){
            return <LoginResidter />
        }
}

  return (
    <div>
      <div  onClick={()=>dispatch(closedModel())} className={`backModel ${ isOpen ? "modal-show " :" modal-hide"} `}></div>
        <div className={`containerModel  ${ isOpen ? "modal-show" :"modal-hide"} `}>
        <div className='closemodeel'>
            <FontAwesomeIcon  className='iconXmark' onClick={()=>dispatch(closedModel())} icon={faXmark}/>
        
        </div>
        <div className='modal-content'>
      {HandelerComponent()}
        </div>
        </div>
      
    </div>
  )
}

export default Model
