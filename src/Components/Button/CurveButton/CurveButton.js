import "./CurveButton.css";

export default function CurveButton({ title, color, style, Icon }) {
  return (
    <button
      className={`curve-button ${color === "blue" ? "blue-btn" : "white-btn"}`}
      style={style}
    >
      {Icon && <Icon />}
      {title && title}
    </button>
  );
}
