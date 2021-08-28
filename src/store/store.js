import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import feedbackReducer from "../features/feedback/feedbackSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    feedback: feedbackReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
