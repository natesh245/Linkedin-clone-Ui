import "./CurveButton.css";

export default function CurveButton({ title, style }) {
  return (
    <button className="curve-button" style={style}>
      {title}
    </button>
  );
}
