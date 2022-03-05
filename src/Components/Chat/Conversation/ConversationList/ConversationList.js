import React from "react";
import ConversationListItem from "./ConversationListItem/ConversationListItem";

import "./ConversationList.css";

const conversations = [
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
];

function ConversationList() {
  return (
    <ul className="list">
      {conversations.map((conv, i) => {
        return <ConversationListItem conv={conv} key={i} />;
      })}
    </ul>
  );
}

export default ConversationList;
