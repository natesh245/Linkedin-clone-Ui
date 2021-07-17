import "./Card.css";

function Card({ width, height, children, backgroundColor }) {
  return (
    <div
      className="card"
      style={{
        width: width || "100%",
        height: height || "auto",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
