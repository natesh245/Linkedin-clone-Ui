import React, { useEffect, useState } from "react";
import Avatar from "../../../../../Components/Avatar/Avatar";
import "./ConversationListItem.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMessagesByConversationId,
  setSelectedConversation,
} from "../../../../../slices/Chat/ChatSlice";

function ConversationListItem({ conv, isSelected }) {
  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );

  const [conversation, setConversation] = useState();
  const dispatch = useDispatch();
  let classes = "li ";
  if (isSelected) classes = classes + "is-selected";

  useEffect(() => {
    const otherUser = conv.otherUser;
    setConversation({
      user_name: otherUser.user_name,
      createdDate: conv.createdDate || "9:30am",
    });
  }, [conv]);

  useEffect(() => {
    if (selectedConversation && selectedConversation._id)
      dispatch(getAllMessagesByConversationId(selectedConversation?._id));
  }, [selectedConversation]);

  return (
    <li
      className={classes}
      onClick={() => {
        dispatch(setSelectedConversation(conv));
      }}
    >
      <div className="li-div">
        <Avatar
          width="35px"
          height="35px"
          initials={conversation?.user_name[0]}
        />
      </div>
      <div className="li-info">
        <div className="info">
          <h5>{conversation?.user_name}</h5>
          {/* <p>{conversation?.createdDate || "9:30am"}</p> */}
        </div>
        {/* <div className="message">{"user:some message"}</div> */}
      </div>
    </li>
  );
}

export default ConversationListItem;
