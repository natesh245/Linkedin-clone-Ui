import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import ImageIcon from "@material-ui/icons/Image";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import GifIcon from "@material-ui/icons/Gif";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CurvedButton from "../../../../Components/Button/CurveButton/CurveButton";

import "./ChatInput.css";

function ChatInput() {
  return (
    <div className="chat-input">
      <textarea
        className="chat-text-area"
        placeholder="Write a message..."
      ></textarea>
      <div className="input-icons">
        <div className="left">
          <ImageIcon />
          <AttachFileIcon />
          <GifIcon />
          <InsertEmoticonIcon />
        </div>
        <div className="right">
          <CurvedButton type="button" color="blue" title="send" />
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
