import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/";

import { setIsLoading, setSnackBar } from "../feedback/feedbackSlice";

const user = JSON.parse(localStorage.getItem("user"));

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (registerData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsLoading(true));
      const response = await axios.post("/user/register", {
        ...registerData,
      });
      if (response) thunkAPI.dispatch(setIsLoading(false));
      return response;
    } catch (error) {
      thunkAPI.dispatch(
        setSnackBar({
          isOpen: true,
          type: "error",
          message: JSON.stringify(error),
        })
      );
      return error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (loginData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsLoading(true));
      const response = await axios.post("/user/login", {
        ...loginData,
      });
      if (response) thunkAPI.dispatch(setIsLoading(false));
      return response;
    } catch (error) {
      if (error.status === 401) thunkAPI.dispatch(logOutUser());
      thunkAPI.dispatch(
        setSnackBar({
          isOpen: true,
          type: "error",
          message: error.message,
        })
      );
      return Promise.reject(error);
    }
  }
);

const initialState = user
  ? {
      isLoggedIn: true,
      user,
    }
  : {
      isLoggedIn: false,
      user: null,
    };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOutUser: (state, action) => {
      localStorage.removeItem("user");
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        const { data, message } = action.payload.data;
        if (!data) alert(message);
        else {
          localStorage.setItem("user", JSON.stringify(data));
          state.isLoggedIn = true;
          state.user = data;
        }
      })
      // .addCase(registerUser.rejected, (state, action) => {
      //   alert(action.error.message);
      // })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { data, message } = action.payload.data;
        if (!data) alert(message);
        else {
          localStorage.setItem("user", JSON.stringify(data));
          state.isLoggedIn = true;
          state.user = data;
        }
      });
    // .addCase(loginUser.rejected, (state, action) => {
    //   alert(action.error.message);
    // });
  },
});

export const { logOutUser } = userSlice.actions;
export default userSlice.reducer;
