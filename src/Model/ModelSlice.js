import { createSlice } from "@reduxjs/toolkit";

const modelSlice =createSlice({
  name:"modal",
  initialState:{isOpen:false , componentName :null},
  reducers:{
   openModel :(state , actoin)=>{
     state.isOpen =true
     state.componentName = actoin.payload
   },
   
closedModel :(state , action)=>{
state.isOpen =false    
state.componentName = null
    }
  }  
})

export  const  {openModel , closedModel} = modelSlice.actions
export default  modelSlice.reducer