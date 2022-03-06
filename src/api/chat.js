import axios from "axios";

const chatApiInstance = axios.create({
  baseURL: process.env.REACT_APP_CHAT_API_URL,
});

export default chatApiInstance;
