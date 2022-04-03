import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./SearchInput.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "../Header/HeaderOptions/HeaderOption/HeaderOption";
import { getSearchResult } from "../../slices/profile/profileSlice";
import BackDrop from "../BackDrop/BackDrop";
import SearchResultList from "./SearchResultList/SearchResultList";

function SearchInput({ toggleHeader }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);

  const searchRef = useRef(null);

  const dispatch = useDispatch();

  const showSearchResultHandler = () =>
    !showSearchResult && setShowSearchResult(true);
  useEffect(() => {
    if (!searchQuery) return;
    let timer = setTimeout(() => {
      dispatch(getSearchResult(searchQuery));
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, dispatch]);

  return (
    <>
      <div className="header-search-option">
        <HeaderOption
          title="Search"
          Icon={SearchIcon}
          onClick={() => {
            toggleHeader();

            searchRef.current.classList.add("search-input-expand");
            showSearchResultHandler();
          }}
        />
      </div>

      <div className="search-input" ref={searchRef}>
        <SearchIcon />
        <form className="search-input-form">
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
            value={searchQuery}
            onClick={showSearchResultHandler}
          />
        </form>
      </div>
      {showSearchResult && (
        <BackDrop
          onClickHandler={() => {
            searchRef.current.classList.contains("search-input-expand") &&
              toggleHeader();
            setShowSearchResult(false);
            searchRef.current.classList.remove("search-input-expand");
          }}
          style={{ position: "fixed", top: "4rem" }}
        >
          <SearchResultList
            setShowSearchResult={setShowSearchResult}
            searchQuery={searchQuery}
            className="search-results"
          />
        </BackDrop>
      )}
    </>
  );
}

export default SearchInput;
