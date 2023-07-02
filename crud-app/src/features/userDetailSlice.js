import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const userDetail = createSlice({
   name:'userDetails',
   initialState:{
    users:[],
    loading:false,
    error:null,


   } 
});
export  default  userDetail.reducer;