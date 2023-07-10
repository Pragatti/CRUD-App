import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// create action
export const createUser =createAsyncThunk("createUserr",async(data,{rejectWithValue})=>{
   console.log(data,"data")
const response =await fetch("https://61057f094b92a000171c5f3d.mockapi.io/searching" ,{
   method:"POST",
   headers:{
      "content-type":"application/json",
   },
   body:JSON.stringify(data)
});

{ console.log(data,"response")}
try{
   const result =await response.json();
    console.log(result)
   return result;

}catch(error){
  return rejectWithValue(error);
}
})

export const userDetail = createSlice({
   name:'userDetails',
   initialState:{
    users:[],
    loading:false,
    error:null,
   },
    extraReducers:{
      [createUser.pending]:(state)=>{
       state.loading=true;
      },
      [createUser.fulfilled]:(state,action)=>{
         state.loading=false;
         state.users.push(action.payload);
        },
        [createUser.rejected]:(state,action)=>{
         state.loading=false;
         state.users=action.payload;
        }
    }

   
});
export  default  userDetail.reducer;