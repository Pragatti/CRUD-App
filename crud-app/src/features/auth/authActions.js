import { createAsyncThunk } from "@reduxjs/toolkit";
import authDataService from "../../../api/services/auth/authService";
const login = createAsyncThunk(
  "user/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response =await fetch("https://61057f094b92a000171c5f3d.mockapi.io/user" ,{
        method:"POST",
        headers:{
           "content-type":"application/json",
        },
        body:JSON.stringify(payload)
     });
     const result =await response.json();
     console.log(result)
    return result;
    } catch (err) {
      // Use `err` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err?.detail);
    }
  }
);

// const setPassword = createAsyncThunk(
//   "user/set-password",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const response = await authDataService.setPassword(payload);
//       return response?.data;
//     } catch (err) {
//       // Use `err` as `action.payload` for a `rejected` action,
//       // by explicitly returning it using the `rejectWithValue()` utility
//       return rejectWithValue(err?.detail);
//     }
//   }
// );
export { login };
