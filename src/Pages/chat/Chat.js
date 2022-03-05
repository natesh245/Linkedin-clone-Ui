import React from "react";
import "./chat.css";
import Avatar from "../../Components/Avatar/Avatar";
import Message from "../../Components/Chat/Message/Message";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import ImageIcon from "@material-ui/icons/Image";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import GifIcon from "@material-ui/icons/Gif";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CurvedButton from "../../Components/Button/CurveButton/CurveButton";

const conversations = [
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
  {
    user_name: "Mohammad shandar",
    date: "Feeb 6",
    "last message": "You:hello",
  },
];

const messages = [
  {
    username: "Mohammad shandar",
    content: "Hi Natesh",
    time: "9:30 am",
  },
  {
    username: "Natesh",
    content: "Hi Shandar",
    time: "9:31 am",
  },
];
function chat() {
  return (
    <div className="chat">
      <div className="chat-container">
        <div className="chat-list">
          <div className="list-header">
            <h2>Messaging</h2>
            <div>
              <MoreHorizIcon style={{ marginRight: "5px" }} />
              <CreateIcon />
            </div>
          </div>
          <div className="list-search">
            <div>
              <SearchIcon />
              <input type="text" placeholder="search messages" />
            </div>
          </div>
          <ul className="list">
            {conversations.map((conv, i) => {
              return (
                <li key={i} className="li">
                  <div className="li-div">
                    <Avatar
                      width="35px"
                      height="35px"
                      avatarUrl={
                        "https://media-exp1.licdn.com/dms/image/C5603AQGCcp3ZU6XavA/profile-displayphoto-shrink_100_100/0/1631022383461?e=1651708800&v=beta&t=PbCC5JMkqGJg4S8GQOz4i73J60iJRBLHxZdr7SzIBbg"
                      }
                    />
                  </div>
                  <div className="li-info">
                    <div className="info">
                      <h5>{conv.user_name}</h5>
                      <p>{conv.date}</p>
                    </div>
                    <div className="message">{conv["last message"]}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="chat-content">
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
          <div className="content">
            {messages.map((message) => {
              return (
                <Message
                  content={message.content}
                  time={message.time}
                  username={message.username}
                />
              );
            })}
          </div>
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
        </div>
      </div>
      <div className="ad-container"></div>
    </div>
  );
}

export default chat;
