import { useRef } from "react";

import "./Header.css";
import SearchInput from "../SearchInput/SearchInput";
import logo from "../../images/linkedin-logo.png";
import HeaderOptions from "./HeaderOptions/HeaderOptions";

function Header() {
  const headerRef = useRef(null);

  const toggleHeaderVisibilty = () => {
    headerRef.current.style.display === "none"
      ? (headerRef.current.style.display = "block")
      : (headerRef.current.style.display = "none");
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src={logo}
          alt="logo"
          style={{ width: "35px", height: "35px", marginRight: "5px" }}
        />
        <SearchInput toggleHeader={toggleHeaderVisibilty} />
      </div>
      <div className="header__right" ref={headerRef}>
        <HeaderOptions />
      </div>
    </div>
  );
}

export default Header;
