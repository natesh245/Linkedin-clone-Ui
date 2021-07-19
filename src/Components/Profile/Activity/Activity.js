import "./Activity.css";
import Card from "../../Card/Card";

function Activity() {
  return (
    // <div className="profile-activity">
    <Card>
      <div className="activity-heading">
        <h2>Activity</h2>
        <span>Start post</span>
      </div>
      <div className="activity-content">
        Posts you created, shared, or commented on in the last 90 days are
        displayed here.
      </div>
      <div className="activity-footer">See all activity</div>
    </Card>
    // </div>
  );
}

export default Activity;
