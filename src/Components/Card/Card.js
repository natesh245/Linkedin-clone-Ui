import "./Card.css";

function Card({ width, height, children }) {
  return (
    <div className="card" style={{ width, height: height || "auto" }}>
      {children}
    </div>
  );
}

export default Card;
