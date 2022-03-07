import React, { useEffect, useState } from "react";
import ConversationListItem from "./ConversationListItem/ConversationListItem";

import "./ConversationList.css";
import { useSelector } from "react-redux";
import { setSelectedConversation } from "../../../../slices/Chat/ChatSlice";

function ConversationList() {
  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );
  const conversations = useSelector((state) => state.chat.conversations);

  return (
    <ul className="list">
      {conversations.length === 0 && <li>No active conversation</li>}
      {conversations.map((conv, i) => {
        return (
          <ConversationListItem
            conv={conv}
            key={conv._id}
            isSelected={conv._id === selectedConversation?._id}
          />
        );
      })}
    </ul>
  );
}

export default ConversationList;
