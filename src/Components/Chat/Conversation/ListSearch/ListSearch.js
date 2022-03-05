import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./ListSearch.css";

function ListSearch() {
  return (
    <div className="list-search">
      <div>
        <SearchIcon />
        <input type="text" placeholder="search messages" />
      </div>
    </div>
  );
}

export default ListSearch;
