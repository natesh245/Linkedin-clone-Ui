import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import "./ChatContentHeader.css";

function ChatContentHeader() {
  return (
    <div className="chat-content-header">
      <div className="chat-header">
        <h2>User name</h2>
        <p>Available on mobile</p>
      </div>
      <div className="icon">
        <MoreHorizIcon style={{ marginRight: "10px" }} />
        <VideoCallIcon />
      </div>
    </div>
  );
}

export default ChatContentHeader;
