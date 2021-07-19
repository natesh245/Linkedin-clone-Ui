import "./Profile.css";
// import Card from "../../Components/Card/Card";
import ProfileMain from "../../Components/Profile/ProfileMain/ProfileMain";
import Dashboard from "../../Components/Profile/Dashboard/Dashboard";
import About from "../../Components/Profile/About/About";
import Activity from "../../Components/Profile/Activity/Activity";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__left">
        <ProfileMain />
        <Dashboard />
        <About />
        <Activity />
      </div>
      <div className="profile__right"></div>
    </div>
  );
}

export default Profile;
