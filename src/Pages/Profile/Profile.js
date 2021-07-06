import "./Profile.css";
// import Card from "../../Components/Card/Card";
import ProfileMain from "./ProfileMain/ProfileMain";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__left">
        <ProfileMain />
      </div>
      <div className="profile__right"></div>
    </div>
  );
}

export default Profile;
