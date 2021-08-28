import Avatar from "../../../Avatar/Avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./HeaderOption.css";
function HeaderOption({ Icon, title, avatarUrl, option, style, onClick }) {
  return (
    <div className="header-option" style={style} onClick={onClick}>
      {Icon && (
        <Icon
          className="header-option__icon"
          style={{ width: "2rem", height: "2rem" }}
        />
      )}
      {avatarUrl && <Avatar width="25px" height="25px" avatarUrl={avatarUrl} />}

      <div className="header-option__title">
        {" "}
        {title}
        {option && <ArrowDropDownIcon />}
      </div>
    </div>
  );
}

export default HeaderOption;
