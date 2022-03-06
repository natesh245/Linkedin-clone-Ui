import React from "react";

import ChatContentHeader from "./ChatContentHeader/ChatContentHeader";
import Messages from "./Messages/Messages";
import ChatInput from "./ChatInput/ChatInput";
import { useSelector } from "react-redux";

import "./ChatContent.css";

function ChatContent() {
  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );
  return (
    <div className="chat-content">
      <ChatContentHeader />
      {selectedConversation && !selectedConversation?._id && (
        <input
          type="text"
          placeholder="Type a name or multiple names"
          style={{
            width: "100%",
            padding: "1rem",
            border: "none",
            borderBottom: "1px solid black",
          }}
        />
      )}
      <Messages />
      <ChatInput />
    </div>
  );
}

export default ChatContent;
