import { SatelliteTwoTone } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Message from "./Message/Message";
import "./Messages.css";

// let messages = [
//   {
//     username: "Mohammad shandar",
//     content: "Hi Natesh",
//     time: "9:30 am",
//   },
//   {
//     username: "Natesh",
//     content: "Hi Shandar",
//     time: "9:31 am",
//   },
// ];

// messages = [];

function Messages() {
  const messages = useSelector((state) => state.chat.messages);
  const user = useSelector((state) => state.user.user);
  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );
  const [messagesArray, setMessagesArray] = useState([]);
  useEffect(() => {
    if (selectedConversation) {
      const otherUser = selectedConversation.members.find(
        (member) => member.user_id !== 1
      );
      console.log(otherUser);

      setMessagesArray(
        messages.map((message) => {
          if (message.senderID === 1)
            return {
              username: user.first_name + " " + user.last_name,
              content: message.content,
              time: "9:40am",
            };
          else if (message.senderID === otherUser.user_id)
            return {
              username: otherUser.user_name,
              content: message.content,
              time: "9:40am",
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
            time={message.time}
            username={message.username}
          />
        );
      })}
    </div>
  );
}

export default Messages;
