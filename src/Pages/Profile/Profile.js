import "./Profile.css";
import Card from "../../Components/Card/Card";
import ProfileMain from "../../Components/Profile/ProfileMain/ProfileMain";
import Dashboard from "../../Components/Profile/Dashboard/Dashboard";
import About from "../../Components/Profile/About/About";
import Activity from "../../Components/Profile/Activity/Activity";
import Experience from "../../Components/Profile/Experience/Experience";
import Education from "../../Components/Profile/Education/Education";
import Suggestion from "../../Components/Profile/Suggestion/Suggestion";
import Dialog from "../../Components/Dialog/Dialog";
import EditSummary from "../../Components/Profile/About/EditSummary/EditSummary";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__left">
        <Dialog title="Edit" isOpen={true}>
          <EditSummary />
        </Dialog>
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
