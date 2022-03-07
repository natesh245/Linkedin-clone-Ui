import React, { useEffect, useState, useContext, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Message from "./Message/Message";
import "./Messages.css";
import { format } from "date-fns";

import { setMessages } from "../../../../slices/Chat/ChatSlice";
import { socketContext } from "../../../../Pages/chat/Chat";

function Messages() {
  const messages = useSelector((state) => state.chat.messages);
  const socket = useContext(socketContext);
  const dispatch = useDispatch();
  const messageEl = useRef();

  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );
  const [messagesArray, setMessagesArray] = useState([]);
  const [newMessageArrived, setNewMessageArrived] = useState(null);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  useEffect(() => {
    if (selectedConversation) {
      const otherUser = selectedConversation.otherUser;
      const user = selectedConversation.currentUser;

      setMessagesArray(
        messages.map((message) => {
          const messageObj = {
            content: message.content,
            time: message.createdAt || new Date(),
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

  useEffect(() => {
    if (socket)
      socket.on("receive-message", (message) => {
        if (selectedConversation._id === message.conversationID) {
          setNewMessageArrived(true);
        }
      });
  }, [socket]);

  useEffect(() => {
    if (newMessageArrived) {
      setMessages([...messages, newMessageArrived]);
      setNewMessageArrived(null);
    }
  }, [newMessageArrived]);
  return (
    <div className="content" ref={messageEl}>
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
