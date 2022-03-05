import React from "react";
import Avatar from "../../Avatar/Avatar";
import "./Message.css";

function Message({ username, time, content }) {
  return (
    <div className="chat-message">
      <Avatar width="35px" height="35px" initials={username.split()[0][0]} />
      <div className="chat-message-info">
        <h2>{username}</h2>.<span>{time}</span>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Message;
