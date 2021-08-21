import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/";

const user = JSON.parse(localStorage.getItem("user"));

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (registerData) => {
    const response = await axios.post("/user/register", {
      ...registerData,
    });
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (loginData) => {
    const response = await axios.post("/user/login", {
      ...loginData,
    });
    return response.data;
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
        const user = action.payload.data;
        localStorage.setItem("user", JSON.stringify(user));
        state.isLoggedIn = true;
        state.user = user;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const user = action.payload.data;
        localStorage.setItem("user", JSON.stringify(user));
        state.isLoggedIn = true;
        state.user = user;
      });
  },
});

export const { logOutUser } = userSlice.actions;
export default userSlice.reducer;
