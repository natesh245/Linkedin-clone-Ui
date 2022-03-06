import React, { useEffect, useState } from "react";
import ConversationListItem from "./ConversationListItem/ConversationListItem";

import "./ConversationList.css";
import { useSelector } from "react-redux";
import { setSelectedConversation } from "../../../../slices/Chat/ChatSlice";
// let conversations = [
//   {
//     user_name: "Mohammad shandar",
//     date: "Feeb 6",
//     "last message": "You:hello",
//   },
//   {
//     user_name: "Mohammad shandar",
//     date: "Feeb 6",
//     "last message": "You:hello",
//   },
//   {
//     user_name: "Mohammad shandar",
//     date: "Feeb 6",
//     "last message": "You:hello",
//   },
//   {
//     user_name: "Mohammad shandar",
//     date: "Feeb 6",
//     "last message": "You:hello",
//   },
//   {
//     user_name: "Mohammad shandar",
//     date: "Feeb 6",
//     "last message": "You:hello",
//   },
//   {
//     user_name: "Mohammad shandar",
//     date: "Feeb 6",
//     "last message": "You:hello",
//   },
//   {
//     user_name: "Mohammad shandar",
//     date: "Feeb 6",
//     "last message": "You:hello",
//   },
//   {
//     user_name: "natesh",
//     date: "Feeb 6",
//     "last message": "jksjksj",
//   },
// ];

// conversations = [];

function ConversationList() {
  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );
  const conversations = useSelector((state) => state.chat.conversations);
  const [isSelected, setIsSelected] = useState(conversations[0]._id);

  useEffect(() => {
    if (!selectedConversation && conversations.length > 0) {
      setSelectedConversation(conversations[0]);
    } else if (selectedConversation && conversations.length > 0) {
      setIsSelected(selectedConversation._id);
    }
  }, [selectedConversation]);

  return (
    <ul className="list">
      {conversations.length === 0 && <li>No active conversation</li>}
      {conversations.map((conv, i) => {
        return (
          <ConversationListItem
            conv={conv}
            key={conv._id}
            isSelected={conv._id === isSelected}
            onClick={(id) => setIsSelected(id)}
          />
        );
      })}
    </ul>
  );
}

export default ConversationList;
