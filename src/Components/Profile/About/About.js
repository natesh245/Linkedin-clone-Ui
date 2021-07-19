import "./About.css";
import CreateIcon from "@material-ui/icons/Create";
import Card from "../../Card/Card";

function About() {
  return (
    <div className="profile-about">
      <Card>
        <div className="about-heading">
          <h2>About</h2>
          <CreateIcon />
        </div>
        <div className="about-content">
          I have good skills in js ,react/redux, nodejs, mongodb. I'm passionate
          about learning new technologies.
        </div>
      </Card>
    </div>
  );
}

export default About;
