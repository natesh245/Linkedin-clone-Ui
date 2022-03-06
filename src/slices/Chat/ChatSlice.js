import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/chat.js";

import { setIsLoading, setSnackBar } from "../feedback/feedbackSlice";

const user = JSON.parse(localStorage.getItem("user"));

export const getAllConversationsByUserId = createAsyncThunk(
  "chat/getAllConversationsByUserId",
  async (userId, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsLoading(true));
      const response = await axios.get(`conversation/user/${userId}`);
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

export const createConversation = createAsyncThunk(
  "chat/createConversation",
  async (conversationData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsLoading(true));
      const response = await axios.post(`conversation/`, conversationData);
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

export const updateConversationById = createAsyncThunk(
  "chat/updateConversationById",
  async (conversationId, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsLoading(true));
      const response = await axios.put(`conversation/${conversationId}`);
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

export const getAllMessagesByConversationId = createAsyncThunk(
  "chat/getAllMessagesByConversationId",
  async (conversationId, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsLoading(true));
      const response = await axios.get(
        `message/conversation/${conversationId}`
      );
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

export const createMessages = createAsyncThunk(
  "chat/createMessages",
  async (messageData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsLoading(true));
      const response = await axios.post(`message/`, messageData);
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

const initialState = {
  selectedConversation: null,
  selectedMembers: [],
  conversations: [
    {
      _id: 1,
      members: [
        { user_name: "Natesh", user_id: 1 },
        { user_name: "Shandar", user_id: 2 },
      ],
    },
    {
      _id: 2,
      members: [
        { user_name: "Natesh", user_id: 1 },
        { user_name: "Sinan", user_id: 3 },
      ],
    },
    {
      _id: 3,
      members: [
        { user_name: "Natesh", user_id: 1 },
        { user_name: "suresh", user_id: 4 },
      ],
    },
  ],
  messages: [
    {
      _id: 1,
      senderID: 1,
      receiverID: 2,
      conversationID: 1,
      content: "hello 246",
    },
    {
      _id: 2,
      senderID: 2,
      receiverID: 1,
      conversationID: 1,
      content: "Hi",
    },
    {
      _id: 2,
      senderID: 2,
      receiverID: 1,
      conversationID: 1,
      content: "I'm in office",
    },
  ],
  selectedChatName: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setSelectedConversation: (state, action) => {
      state.selectedConversation = action.payload;
    },
    setConversations: (state, action) => {
      state.conversations = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setSelectedChatName: (state, action) => {
      state.selectedChatName = action.payload;
    },
    setSelectedMembers: (state, action) => {
      state.selectedMembers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllConversationsByUserId.fulfilled, (state, action) => {
        if (action.payload.data) {
          const { data, message } = action.payload.data;

          state.conversations = data;
        }
      })
      .addCase(createConversation.fulfilled, (state, action) => {
        if (action.payload.data) {
          const { data, message } = action.payload.data;
          state.conversations = [...state.conversations, data];
        }
      })
      .addCase(updateConversationById.fulfilled, (state, action) => {
        if (action.payload.data) {
          const { data, message } = action.payload.data;
          state.selectedConversation = state.conversations.map((conv) => {
            if (data._id == conv._id) return data;
            return conv;
          });
        }
      })
      .addCase(getAllMessagesByConversationId.fulfilled, (state, action) => {
        if (action.payload.data) {
          const { data, message } = action.payload.data;
          state.messages = data;
        }
      })
      .addCase(createMessages.fulfilled, (state, action) => {
        if (action.payload.data) {
          const { data, message } = action.payload.data;
          state.messages = [state.messages, data];
        }
      });
  },
});

export const {
  setSelectedConversation,
  setConversations,
  setMessages,
  setSelectedChatName,
  setSelectedMembers,
} = chatSlice.actions;
export default chatSlice.reducer;
