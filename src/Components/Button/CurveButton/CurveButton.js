import "./CurveButton.css";

export default function CurveButton({ title, color, style }) {
  return (
    <button
      className={`curve-button ${color === "blue" ? "blue-btn" : "white-btn"}`}
      style={style}
    >
      {title}
    </button>
  );
}
