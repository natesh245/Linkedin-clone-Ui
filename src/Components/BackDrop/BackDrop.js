import "./BackDrop.css";
function BackDrop({ children, onClickHandler }) {
  return (
    <div className="backdrop" onClick={onClickHandler || null}>
      {children}
    </div>
  );
}

export default BackDrop;
