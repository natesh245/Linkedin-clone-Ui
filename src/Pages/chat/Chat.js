import React from "react";
import "./chat.css";
import ChatContent from "../../Components/Chat/ChatContent/ChatContent";
import Conversation from "../../Components/Chat/Conversation/Conversation";

function chat() {
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

export default chat;
