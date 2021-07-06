import "./SearchInput.css";
import SearchIcon from "@material-ui/icons/Search";

function SearchInput() {
  return (
    <div className="search-input">
      <SearchIcon />
      <form>
        <input type="text" placeholder="Search" />
      </form>
    </div>
  );
}

export default SearchInput;
