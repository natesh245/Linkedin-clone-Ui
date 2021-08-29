import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/";

import { setIsLoading, setSnackBar } from "../feedback/feedbackSlice";

const user = JSON.parse(localStorage.getItem("user"));

export const getProfileById = createAsyncThunk(
  "profile/getProfileById",
  async (profileId, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsLoading(true));
      const response = await axios.get(`profile/${profileId}`);
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

export const getProfileByUserId = createAsyncThunk(
  "profile/getProfileByUserId",
  async (userId, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsLoading(true));
      const response = await axios.get(`/profile/user/${userId}`);
      if (response) thunkAPI.dispatch(setIsLoading(false));
      return response;
    } catch (error) {
      if (error.status !== 404)
        thunkAPI.dispatch(
          setSnackBar({
            isOpen: true,
            type: "error",
            message: error.message,
          })
        );
      return error;
    }
  }
);

export const addProfileByUserId = createAsyncThunk(
  "profile/addProfileByUserId",
  async (arg, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsLoading(true));
      const response = await axios.post(`profile/${arg.userId}`, {
        ...arg.body,
      });
      if (response) {
        thunkAPI.dispatch(setIsLoading(false));
        thunkAPI.dispatch(
          setSnackBar({
            isOpen: true,
            type: "success",
            message: response.data.message,
          })
        );
      }
      return response;
    } catch (error) {
      thunkAPI.dispatch(
        setSnackBar({
          isOpen: true,
          type: "error",
          message: error.message,
        })
      );
      return error;
    }
  }
);

export const updateProfileByProfileId = createAsyncThunk(
  "profile/updateProfileByProfileId",
  async (arg, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsLoading(true));
      const response = await axios.put(`profile/${arg.profileId}`, {
        ...arg.body,
      });
      if (response) {
        thunkAPI.dispatch(setIsLoading(false));
        thunkAPI.dispatch(
          setSnackBar({
            isOpen: true,
            type: "success",
            message: response.data.message,
          })
        );
      }
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

const initialState = {
  selectedProfileEditForm: "",
  selectedProfile: null,
  selectedProfileIntro: null,
  selectedProfileSummary: null,
  selectedEducation: null,
  selectedExperience: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setSelectedProfileIntro: (state, action) => {
      let info = action.payload || null;
      if (action.payload === "new") {
        info = {
          first_name: user.first_name,
          last_name: user.last_name,
          country: "",
          industry: "",
          current_position: "",
          location: "",
          headline: "",
        };
      }
      state.selectedProfileIntro = info;
    },
    setSelectedProfileSummary: (state, action) => {
      state.selectedProfileSummary = action.payload;
    },
    setSelectedEducation: (state, action) => {
      state.selectedEducation = action.payload;
    },
    setSelectedExperience: (state, action) => {
      state.selectedExperience = action.payload;
    },
    setSelectedProfileEditForm: (state, action) => {
      state.selectedProfileEditForm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileById.fulfilled, (state, action) => {
        if (action.payload.data) {
          const { data, message } = action.payload.data;
          state.selectedProfile = data;
        }
      })

      .addCase(getProfileByUserId.fulfilled, (state, action) => {
        if (action.payload.data) {
          const { data, message } = action.payload.data;
          state.selectedProfile = data;
        }
      })
      .addCase(addProfileByUserId.fulfilled, (state, action) => {
        if (action.payload.data) {
          const { data, message } = action.payload.data;
          state.selectedProfile = data;
        }
      })
      .addCase(updateProfileByProfileId.fulfilled, (state, action) => {
        if (action.payload.data) {
          const { data, message } = action.payload.data;
          state.selectedProfile = data;
        }
      });
  },
});

export const {
  setSelectedEducation,
  setSelectedExperience,
  setSelectedProfileEditForm,
  setSelectedProfileIntro,
  setSelectedProfileSummary,
} = profileSlice.actions;
export default profileSlice.reducer;
