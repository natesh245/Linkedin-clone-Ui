import "./Experience.css";
import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import Dialog from "../../Dialog/Dialog";
import EditExperience from "./EditExperience/EditExperience";

const experience = [
  {
    company: "SLK",
    duration: "1 yr 9mos",
    companyLogo:
      "data:image/jpeg;base64,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",
    positions: [
      {
        name: "Associate Software Engineer",
        type: "Full time",
        start: "Nov 2020",
        end: "present",
        duration: "9 mos",
        place: "Bengaluru, Karnataka, India",
      },
      {
        name: "Software Trainee",
        type: "Full time",
        start: "Nov 2019",
        end: "Nov 2020",
        duration: "1yr 1mo",
        place: "Bengaluru, Karnataka, India",
      },
    ],
  },
  {
    company: "SLK",
    duration: "1 yr 9mos",
    companyLogo:
      "data:image/jpeg;base64,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",
    positions: [
      {
        name: "Associate Software Engineer",
        type: "Full time",
        start: "Nov 2020",
        end: "present",
        duration: "9 mos",
        place: "Bengaluru, Karnataka, India",
      },
      {
        name: "Software Trainee",
        type: "Full time",
        start: "Nov 2019",
        end: "Nov 2020",
        duration: "1yr 1mo",
        place: "Bengaluru, Karnataka, India",
      },
    ],
  },
];

function Experience() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="profile-experience">
      <div className="experience-heading">
        <h2>Experience</h2>
        <AddIcon onClick={() => setIsDialogOpen(true)} />

        <Dialog
          title="Edit Experience"
          isOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        >
          <EditExperience />
        </Dialog>
      </div>
      <div className="experience-content">
        {experience.map((exp) => {
          return (
            <div className="experience-company">
              <div className="company-header">
                <img src={exp.companyLogo} alt={exp.company} />
                <div>
                  <h4>{exp.company}</h4>
                  <p>{exp.duration}</p>
                </div>
              </div>
              <div className="company-content">
                {exp.positions.map((position) => {
                  return (
                    <div className="position-content">
                      <div className="edit-icon">
                        <CreateIcon />
                      </div>
                      <span className="bullet-point"></span>
                      <h6>{position.name}</h6>
                      <p className="position-type">{position.type}</p>
                      <p className="position-timeline">
                        {position.start +
                          " - " +
                          position.end +
                          " . " +
                          position.duration}
                      </p>
                      <p className="position-place">{position.place}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
