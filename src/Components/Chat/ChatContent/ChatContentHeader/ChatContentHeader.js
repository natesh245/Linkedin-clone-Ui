import React from "react";
import { useSelector } from "react-redux";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import "./ChatContentHeader.css";

function ChatContentHeader() {
  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );
  return (
    <div className="chat-content-header">
      <div className="chat-header">
        <h2>User name</h2>
        {selectedConversation?._id && <p>Available on mobile</p>}
      </div>
      {selectedConversation?._id && (
        <div className="icon">
          <MoreHorizIcon style={{ marginRight: "10px" }} />
          <VideoCallIcon />
        </div>
      )}
    </div>
  );
}

export default ChatContentHeader;
