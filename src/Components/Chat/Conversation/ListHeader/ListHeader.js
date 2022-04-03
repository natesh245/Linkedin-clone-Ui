import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CreateIcon from "@material-ui/icons/Create";
import "./ListHeader.css";
import { setSelectedConversation } from "../../../../slices/Chat/ChatSlice";

function ListHeader() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <div className="list-header">
      <h2>Messaging</h2>
      <div>
        <MoreHorizIcon style={{ marginRight: "5px" }} />
        <CreateIcon
          onClick={() => {
            dispatch(setSelectedConversation({ members: [] }));
          }}
        />
      </div>
    </div>
  );
}

export default ListHeader;
