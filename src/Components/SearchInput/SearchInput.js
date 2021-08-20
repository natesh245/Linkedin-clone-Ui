import "./SearchInput.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "../Header/HeaderOptions/HeaderOption/HeaderOption";

function SearchInput() {
  return (
    <>
      <div className="header-search-option">
        <HeaderOption title="Search" Icon={SearchIcon} />
      </div>

      <div className="search-input">
        <SearchIcon />
        <form className="search-input-form">
          <input type="text" placeholder="Search" />
        </form>
      </div>
    </>
  );
}

export default SearchInput;
