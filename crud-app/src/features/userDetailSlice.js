import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://61057f094b92a000171c5f3d.mockapi.io/searching",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// read action
export const showUser = createAsyncThunk(
  "showUser",
  async (rejectWithValue) => {
    try {
      const response = await fetch(
        "https://61057f094b92a000171c5f3d.mockapi.io/searching",
        {
          method: "GET",
          
        }
      );

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users=action.payload;
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
  },
});
export default userDetail.reducer;
