import React from "react";

import ListHeader from "./ListHeader/ListHeader";

import "./Conversation.css";
import ConversationList from "./ConversationList/ConversationList";
import ListSearch from "./ListSearch/ListSearch";

function Conversation() {
  return (
    <div className="chat-list">
      <ListHeader />
      <ListSearch />
      <ConversationList />
    </div>
  );
}

export default Conversation;
