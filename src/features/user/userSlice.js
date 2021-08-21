import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/";

const user = JSON.parse(localStorage.getItem("user"));

export const registerUser = createAsyncThunk("user/registerUser", async () => {
  const response = await axios.post("/user/register", {
    first_name: "natesh",
    last_name: "m",
    email_id: "test246@gmail.com",
    password: "test246",
  });
  return response.data;
});

export const loginUser = createAsyncThunk("user/loginUser", async () => {
  const response = await axios.post("/user/login", {
    email_id: "test246@gmail.com",
    password: "test246",
  });
  return response.data;
});

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
