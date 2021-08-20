import Avatar from "../../../Avatar/Avatar";
import CurveButton from "../../../Button/CurveButton/CurveButton";
import "./People.css";

function People({ avatarUrl, name, desc }) {
  return (
    <div className="people">
      <div className="people__content">
        <Avatar avatarUrl={avatarUrl} width="30px" height="30px" />
        <div className="people__info">
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <CurveButton title="connect" color="blue" />
    </div>
  );
}

export default People;
