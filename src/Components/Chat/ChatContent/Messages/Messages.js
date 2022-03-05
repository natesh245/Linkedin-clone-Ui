import React from "react";
import Message from "./Message/Message";
import "./Messages.css";

const messages = [
  {
    username: "Mohammad shandar",
    content: "Hi Natesh",
    time: "9:30 am",
  },
  {
    username: "Natesh",
    content: "Hi Shandar",
    time: "9:31 am",
  },
];

function Messages() {
  return (
    <div className="content">
      {messages.map((message) => {
        return (
          <Message
            content={message.content}
            time={message.time}
            username={message.username}
          />
        );
      })}
    </div>
  );
}

export default Messages;
