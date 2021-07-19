import Card from "../../Card/Card";
import "./Dashboard.css";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";
import PeopleIcon from "@material-ui/icons/People";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import BookmarkIcon from "@material-ui/icons/Bookmark";
function Dashboard() {
  return (
    // <div className="dashboard">
    <Card width="100%" height="100%" backgroundColor="#DCE6F1">
      <div className="dashboard__content">
        <h2 className="dashboard__title">Your Dashboard</h2>
        <p className="dashboard__subtitle">Private to you</p>

        <Card>
          <div className="dashboard__views">
            <div className="views">
              <h2>18</h2>
              <p>Who viewed your profile</p>
            </div>
            <div className="views">
              <h2>0</h2>
              <p>Article Views</p>
            </div>
            <div className="views">
              <h2>15</h2>
              <p>Search Apperances</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="dashboard__section">
            <ul className="dashboard__section-list">
              <li>
                <div className="icon">
                  <SettingsInputAntennaIcon />
                </div>
                <div className="info">
                  <h5>
                    Creator mode:<span>Off</span>
                  </h5>
                  <p>
                    Grow your audience andget discovered by highlighting content
                    on your profile
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <PeopleIcon />
                </div>
                <div className="info">
                  <h5>My Network</h5>
                  <p>Manage your connections, events and interests</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <LocalAtmIcon />
                </div>
                <div className="info">
                  <h5>Salary Insights</h5>
                  <p>
                    See how your salary compares with others in the community
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <BookmarkIcon />
                </div>
                <div className="info">
                  <h5>My Items</h5>
                  <p>Keep track of your jobs, courses and articles</p>
                </div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </Card>
    // </div>
  );
}

export default Dashboard;
