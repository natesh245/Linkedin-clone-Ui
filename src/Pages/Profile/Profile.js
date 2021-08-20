import "./Profile.css";
import Card from "../../Components/Card/Card";
import ProfileMain from "../../Components/Profile/ProfileMain/ProfileMain";
import Dashboard from "../../Components/Profile/Dashboard/Dashboard";
import About from "../../Components/Profile/About/About";
import Activity from "../../Components/Profile/Activity/Activity";
import Experience from "../../Components/Profile/Experience/Experience";
import Education from "../../Components/Profile/Education/Education";
import Suggestion from "../../Components/Profile/Suggestion/Suggestion";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__left">
        <ProfileMain />
        <Dashboard />
        <About />
        <Activity />
        <Card>
          <Experience />
          <Education />
        </Card>
      </div>
      <div className="profile__right">
        <Suggestion title="People also viewed" />
        <Suggestion title="People you may know" />
      </div>
    </div>
  );
}

export default Profile;
