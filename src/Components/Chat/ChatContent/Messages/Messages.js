import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Message from "./Message/Message";
import "./Messages.css";
import { format } from "date-fns";

function Messages() {
  const messages = useSelector((state) => state.chat.messages);

  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );
  const [messagesArray, setMessagesArray] = useState([]);
  useEffect(() => {
    if (selectedConversation) {
      const otherUser = selectedConversation.otherUser;
      const user = selectedConversation.currentUser;

      setMessagesArray(
        messages.map((message) => {
          const messageObj = {
            content: message.content,
            time: message.createdAt,
          };
          if (message.senderID === user._id)
            return {
              ...messageObj,
              username: user.first_name + " " + user.last_name,
            };
          else if (message.senderID === otherUser.user_id)
            return {
              ...messageObj,
              username: otherUser.user_name,
            };
        })
      );
    }
  }, [messages, selectedConversation]);
  return (
    <div className="content">
      {messagesArray.map((message) => {
        if (!message) return null;
        return (
          <Message
            content={message.content}
            time={format(new Date(message.time), "dd/MM/yyyy HH:mm")}
            username={message.username}
          />
        );
      })}
    </div>
  );
}

export default Messages;
