import React, { useState, useContext } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import ImageIcon from "@material-ui/icons/Image";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import GifIcon from "@material-ui/icons/Gif";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CurvedButton from "../../../../Components/Button/CurveButton/CurveButton";

import "./ChatInput.css";
import { useDispatch, useSelector } from "react-redux";
import { socketContext } from "../../../../Pages/chat/Chat";
import { setMessages } from "../../../../slices/Chat/ChatSlice";

function ChatInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const socket = useContext(socketContext);
  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div className="chat-input">
      <textarea
        className="chat-text-area"
        placeholder="Write a message..."
        onChange={(event) => setText(event.target.value)}
        value={text}
      ></textarea>
      <div className="input-icons">
        <div className="left">
          <ImageIcon />
          <AttachFileIcon />
          <GifIcon />
          <InsertEmoticonIcon />
        </div>
        <div className="right">
          <CurvedButton
            type="button"
            color="blue"
            title="send"
            onClick={() => {
              socket.emit("send-message", {
                senderID: selectedConversation?.currentUser?._id,
                receiverID: selectedConversation?.otherUser.user_id,
                conversationID: selectedConversation?._id,
                content: text,
              });
              setText("");
              dispatch(
                setMessages([
                  ...messages,
                  {
                    senderID: selectedConversation?.currentUser?._id,
                    receiverID: selectedConversation?.otherUser.user_id,
                    conversationID: selectedConversation?._id,
                    content: text,
                    createdAt: new Date(),
                  },
                ])
              );
            }}
          />
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
