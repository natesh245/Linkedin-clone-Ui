import React from "react";
import Avatar from "../../../../../Components/Avatar/Avatar";
import "./ConversationListItem.css";

function ConversationListItem({ conv }) {
  return (
    <li className="li">
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
}

export default ConversationListItem;
