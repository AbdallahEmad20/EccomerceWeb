import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


//  Fetch All Data  and the action is fetch data 
export  const fetchProduct=createAsyncThunk("productSlice", async()=>{
    const res =await fetch("https://dummyjson.com/products")
    const data = await res.json()
    // data =action.payload
    console.log("datttttttta" , data.products)
    return data.products
  })
  

//    get categories name

export  const fetchCategories=createAsyncThunk("CategoriesSlice", async()=>{
    const res =await fetch("https://dummyjson.com/products/categories")
    const data = await res.json()
    // data =action.payload
    console.log("Cato" , data)
    return data
  })
  
  //  get categories content

  export  const fetchCategoriesContent=createAsyncThunk("CategoryNAmeSlice", async(catoName)=>{
    const res =await fetch(`https://dummyjson.com/products/category/${catoName}`)
    const data = await res.json()
    // data =action.payload
    console.log("CatoContent" , data.products)
    return data.products
  })

  //  product details 

  export  const ProDetails=createAsyncThunk("detailsProduct", async(dataa)=>{
    const res =await fetch(`https://dummyjson.com/products/${dataa}`)
    const data = await res.json()
    // data =action.payload
    console.log( "mypro=====" , data)
    return data
  })
  


  export const productSlice = createSlice({
name:"myProduct",
initialState:{myproducts:[] , category:[] ,catoContent:[] ,  detail:[],  isloading:false},
extraReducers:(builder)=>{
    builder
    .addCase(fetchProduct.pending, function (state) {
      state.isloading = true;
    })
    .addCase(fetchProduct.fulfilled, (state, action) => {
      state.myproducts = action.payload;
      state.isloading = false;
    
    })

    .addCase(fetchCategories.fulfilled, (state, action) => {
      state.category = action.payload;
    
    })
    .addCase(fetchCategoriesContent.pending, (state, action) => {
      state.isloading = true;
        
    })

    .addCase(fetchCategoriesContent.fulfilled, (state, action) => {
      state.catoContent = action.payload;
      state.isloading = false;
        
    })

    .addCase(ProDetails.fulfilled, (state, action) => {
      state.detail = action.payload;  
    })

  }
    

  })

  export default  productSlice.reducer