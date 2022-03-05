import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CreateIcon from "@material-ui/icons/Create";
import "./ListHeader.css";

function ListHeader() {
  return (
    <div className="list-header">
      <h2>Messaging</h2>
      <div>
        <MoreHorizIcon style={{ marginRight: "5px" }} />
        <CreateIcon />
      </div>
    </div>
  );
}

export default ListHeader;
