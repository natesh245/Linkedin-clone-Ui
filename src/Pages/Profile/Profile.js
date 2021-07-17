import "./Profile.css";
// import Card from "../../Components/Card/Card";
import ProfileMain from "../../Components/Profile/ProfileMain/ProfileMain";
import Dashboard from "../../Components/Profile/Dashboard/Dashboard";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__left">
        <ProfileMain />
        <Dashboard />
      </div>
      <div className="profile__right"></div>
    </div>
  );
}

export default Profile;
