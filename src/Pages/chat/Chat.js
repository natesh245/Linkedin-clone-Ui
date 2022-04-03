import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./chat.css";
import ChatContent from "../../Components/Chat/ChatContent/ChatContent";
import Conversation from "../../Components/Chat/Conversation/Conversation";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedConversation,
  getAllConversationsByUserId,
} from "../../slices/Chat/ChatSlice";

export const socketContext = React.createContext();

function Chat() {
  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );
  const user = useSelector((state) => state.user.user);
  const conversations = useSelector((state) => state.chat.conversations);
  const dispatch = useDispatch();

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(
      `${process.env.REACT_APP_SOCKET_SERVER}?user_id=${user._id}`
    );
    setSocket(newSocket);

    if (user) dispatch(getAllConversationsByUserId(user._id));

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (!selectedConversation && conversations.length > 0)
      dispatch(setSelectedConversation(conversations[0]));
  }, [conversations]);

  return (
    <div className="chat">
      <div className="chat-container">
        <socketContext.Provider value={socket}>
          <Conversation />
          <ChatContent />
        </socketContext.Provider>
      </div>
      {/* <div className="ad-container"></div> */}
    </div>
  );
}

export default Chat;
