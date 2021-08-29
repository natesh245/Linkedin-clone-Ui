import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import feedbackReducer from "../features/feedback/feedbackSlice";
import profileReducer from "../features/profile/profileSlice";
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
