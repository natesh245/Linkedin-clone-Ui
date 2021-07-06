import "./Avatar.css";

function Avatar({ width, height, avatarUrl }) {
  return (
    <div className="avatar" style={{ width, height }}>
      <img src={avatarUrl} alt="name" style={{ width, height }} />
    </div>
  );
}

export default Avatar;
