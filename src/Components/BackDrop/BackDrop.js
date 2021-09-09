import "./BackDrop.css";
function BackDrop({ children, onClickHandler, style }) {
  return (
    <div className="backdrop" onClick={onClickHandler || null} style={style}>
      {children}
    </div>
  );
}

export default BackDrop;
