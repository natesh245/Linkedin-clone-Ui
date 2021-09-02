import React, { useState } from "react";
import "./Education.css";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import Dialog from "../../Dialog/Dialog";
import EditEducation from "./Edit/EditEducation";

import { useSelector, useDispatch } from "react-redux";

import {
  setSelectedProfileEducation,
  addProfileByUserId,
  updateProfileByProfileId,
} from "../../../features/profile/profileSlice";

function Education() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState(null);

  const selectedProfile = useSelector((state) => state.profile.selectedProfile);
  const selectedProfileEducation = useSelector(
    (state) => state.profile.selectedProfileEducation
  );
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const education = selectedProfile?.education || [];

  const handleSave = () => {
    if (selectedProfileEducation) {
      if (selectedProfile) {
        const education = selectedProfile?.education || [];
        dispatch(
          updateProfileByProfileId({
            profileId: selectedProfile._id,
            body: {
              education: [
                selectedProfileEducation,
                ...education.filter(
                  (edu) => edu._id !== selectedProfileEducation._id
                ),
              ],
            },
          })
        );
      } else
        dispatch(
          addProfileByUserId({
            userId: user._id,
            body: {
              education: [
                selectedProfileEducation,
                ...education.filter(
                  (edu) => edu._id !== selectedProfileEducation._id
                ),
              ],
            },
          })
        );
    }
  };

  return (
    <div className="profile-education">
      <div className="education-heading">
        <h2>Education</h2>
        <AddIcon
          onClick={() => {
            setIsDialogOpen(true);
            setDialogTitle("Add Education");
            dispatch(setSelectedProfileEducation("new"));
          }}
        />

        <Dialog
          title={dialogTitle}
          isOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          onSave={handleSave}
        >
          <EditEducation />
        </Dialog>
      </div>
      <div className="education-content">
        {education.length === 0 && <span>{"No education added"}</span>}
        {education.map((edu) => {
          const id = edu._id;
          return (
            <div className="education-list" key={id}>
              <div className="edit-icon">
                <CreateIcon
                  onClick={() => {
                    setIsDialogOpen(true);
                    setDialogTitle("Edit Education");
                    dispatch(setSelectedProfileEducation(edu));
                  }}
                />
              </div>
              <img
                src={
                  "https://www.voicesofyouth.org/sites/voy/files/images/2019-03/school.jpg"
                }
                alt={edu.school}
              />
              <div className="education-info">
                <h4>{edu.school}</h4>
                <p className="edu-degree">
                  {edu.degree + " . " + edu.field_of_study}
                </p>
                <p className="edu-timeline">
                  {`${edu?.start_date?.month} ` +
                    edu?.start_date?.year +
                    "-" +
                    `${edu?.end_date?.month} ` +
                    edu?.end_date?.year}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
