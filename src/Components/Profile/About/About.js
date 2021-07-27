import React, { useState } from "react";
import "./About.css";
import CreateIcon from "@material-ui/icons/Create";
import Card from "../../Card/Card";
import EditSummary from "./EditSummary/EditSummary";
import Dialog from "../../Dialog/Dialog";
function About() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    // <div className="profile-about">
    <>
      <Dialog
        title="Edit Summary"
        isOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      >
        <EditSummary />
      </Dialog>
      <Card>
        <div className="about-heading">
          <h2>About</h2>
          <CreateIcon onClick={() => setIsDialogOpen(true)} />
        </div>
        <div className="about-content">
          I have good skills in js ,react/redux, nodejs, mongodb. I'm passionate
          about learning new technologies.
        </div>
      </Card>
    </>
    // </div>
  );
}

export default About;
