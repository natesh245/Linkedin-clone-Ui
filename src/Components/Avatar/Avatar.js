import "./Avatar.css";

function Avatar({ width, height, avatarUrl, initials }) {
  return (
    <div className="avatar" style={{ width, height }}>
      {avatarUrl && (
        <img src={avatarUrl} alt="name" style={{ width, height }} />
      )}
      {!avatarUrl && initials && (
        <div
          style={{
            width,
            height,
            background: "green",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          {initials}
        </div>
      )}
    </div>
  );
}

export default Avatar;
