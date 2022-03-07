import React, { useEffect } from "react";
import "./chat.css";
import ChatContent from "../../Components/Chat/ChatContent/ChatContent";
import Conversation from "../../Components/Chat/Conversation/Conversation";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedConversation,
  getAllConversationsByUserId,
} from "../../slices/Chat/ChatSlice";

function Chat() {
  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );
  const user = useSelector((state) => state.user.user);
  const conversations = useSelector((state) => state.chat.conversations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllConversationsByUserId(user._id));
    if (!selectedConversation && conversations.length > 0)
      dispatch(setSelectedConversation(conversations[0]));
  }, []);

  return (
    <div className="chat">
      <div className="chat-container">
        <Conversation />
        <ChatContent />
      </div>
      <div className="ad-container"></div>
    </div>
  );
}

export default Chat;
