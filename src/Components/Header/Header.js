import "./Header.css";
import SearchInput from "../SearchInput/SearchInput";
import logo from "../../images/linkedin-logo.png";
import HeaderOptions from "./HeaderOptions/HeaderOptions";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src={logo}
          alt="logo"
          style={{ width: "35px", height: "35px", marginRight: "5px" }}
        />
        <SearchInput />
      </div>
      <div className="header__right">
        <HeaderOptions />
      </div>
    </div>
  );
}

export default Header;
