import React from "react";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import ImageIcon from "@material-ui/icons/Image";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import GifIcon from "@material-ui/icons/Gif";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CurvedButton from "../../../Components/Button/CurveButton/CurveButton";

import ChatContentHeader from "./ChatContentHeader/ChatContentHeader";
import Messages from "./Messages/Messages";
import ChatInput from "./ChatInput/ChatInput";

import "./ChatContent.css";

function ChatContent() {
  return (
    <div className="chat-content">
      <ChatContentHeader />
      <Messages />
      <ChatInput />
    </div>
  );
}

export default ChatContent;
