import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSnackbarOpen: false,
  message: "",
  type: "success",
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
    setSnackBar: (state, action) => {
      const { type, message, isOpen } = action.payload;
      state.type = type;
      state.message = message;
      state.isSnackbarOpen = isOpen;
    },
  },
});

export const { setIsLoading, setSnackBar } = feedbackSlice.actions;
export default feedbackSlice.reducer;
