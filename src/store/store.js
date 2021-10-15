import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user/userSlice";
import feedbackReducer from "../slices/feedback/feedbackSlice";
import profileReducer from "../slices/profile/profileSlice";
import { interceptors } from "../api";

const store = configureStore({
  reducer: {
    user: userReducer,
    feedback: feedbackReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

interceptors(store);

export default store;
