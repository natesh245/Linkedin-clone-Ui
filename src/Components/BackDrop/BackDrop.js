import "./BackDrop.css";
function BackDrop({ children, onClick }) {
  return (
    <div className="backdrop" onClick={onClick || null}>
      {children}
    </div>
  );
}

export default BackDrop;
