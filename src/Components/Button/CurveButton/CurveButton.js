import "./CurveButton.css";

export default function CurveButton({
  title,
  color,
  style,
  Icon,
  type,
  onClick,
}) {
  let extraClass;
  if (color === "blue") extraClass = "blue-btn";
  else if (color === "blue-white") extraClass = "blue-white-btn";
  else extraClass = "white-btn";
  return (
    <button
      className={`curve-button ${extraClass}`}
      style={style}
      type={type}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {title && title}
    </button>
  );
}
