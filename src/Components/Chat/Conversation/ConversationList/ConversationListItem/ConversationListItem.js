import React, { useEffect, useState } from "react";
import Avatar from "../../../../../Components/Avatar/Avatar";
import "./ConversationListItem.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedConversation } from "../../../../../slices/Chat/ChatSlice";

function ConversationListItem({ conv, isSelected, onClick, id }) {
  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );
  const user = useSelector((state) => state.user.user);
  const [conversation, setConversation] = useState();
  const dispatch = useDispatch();
  let classes = "li ";
  if (isSelected) classes = classes + "is-selected";

  useEffect(() => {
    const otherUser = conv.members.find((member) => member._id !== 1);
    setConversation({
      user_name: otherUser.user_name,
      createdDate: conv.createdDate || "9:30am",
    });
  }, [conv]);

  return (
    <li
      className={classes}
      onClick={() => {
        onClick(selectedConversation?._id);
        dispatch(setSelectedConversation(conv));
      }}
    >
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
          <h5>{conversation?.user_name}</h5>
          <p>{conversation?.createdDate || "9:30am"}</p>
        </div>
        <div className="message">{"user:some message"}</div>
      </div>
    </li>
  );
}

export default ConversationListItem;
