import "./CurveButton.css";

export default function CurveButton({ title, color, style, Icon, type }) {
  return (
    <button
      className={`curve-button ${color === "blue" ? "blue-btn" : "white-btn"}`}
      style={style}
      type={type}
    >
      {Icon && <Icon />}
      {title && title}
    </button>
  );
}
