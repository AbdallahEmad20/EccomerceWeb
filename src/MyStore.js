import { configureStore } from "@reduxjs/toolkit";
import  ProductSlice from "./rtk/ProductSlice"
import ModelSlice from "./Model/ModelSlice";
import CartSlice from "./rtk/CartSlice";
import AuthSlice from "./rtk/AuthSlice";

export const MyStore =configureStore({
    reducer :{
        products:ProductSlice,
        Model:ModelSlice ,
        cart:CartSlice,
        AuthSlice,
    }
})