import "./Experience.css";
import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import Dialog from "../../Dialog/Dialog";
import EditExperience from "./EditExperience/EditExperience";

import { useSelector, useDispatch } from "react-redux";

import {
  setSelectedProfileExperience,
  addProfileByUserId,
  updateProfileByProfileId,
} from "../../../features/profile/profileSlice";

function Experience() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState(null);

  const selectedProfile = useSelector((state) => state.profile.selectedProfile);
  const selectedProfileExperience = useSelector(
    (state) => state.profile.selectedProfileExperience
  );
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const experience = selectedProfile?.experience || [];

  const handleSave = () => {
    if (selectedProfileExperience) {
      if (selectedProfile) {
        const experience = selectedProfile?.experience || [];

        const selectedExperience = selectedProfile.experience.find(
          (e) => e._id === selectedProfileExperience.exp_id
        );
        let positions = [];
        if (selectedExperience)
          positions = selectedExperience.positions.filter(
            (pos) => pos._id !== selectedProfileExperience.pos_id
          );
        positions.push(selectedProfileExperience);
        const selectedCompany = {
          company_name: selectedProfileExperience?.company_name,
          positions,
        };

        dispatch(
          updateProfileByProfileId({
            profileId: selectedProfile._id,
            body: {
              experience: [
                selectedCompany,
                ...experience.filter((exp) => {
                  if (selectedProfileExperience?.exp_id !== exp._id) {
                    return true;
                  }
                }),
              ],
            },
          })
        );
      } else
        dispatch(
          addProfileByUserId({
            userId: user._id,
            body: {
              experience: [
                selectedProfileExperience,
                ...experience.filter(
                  (exp) => exp._id !== selectedProfileExperience._id
                ),
              ],
            },
          })
        );
    }
  };
  return (
    <div className="profile-experience">
      <div className="experience-heading">
        <h2>Experience</h2>
        <AddIcon
          onClick={() => {
            setIsDialogOpen(true);
            setDialogTitle("Add Experience");
            dispatch(setSelectedProfileExperience("new"));
          }}
        />

        <Dialog
          title={dialogTitle}
          isOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          onSave={handleSave}
        >
          <EditExperience />
        </Dialog>
      </div>
      <div className="experience-content">
        {experience.length === 0 && <span>No Experience added</span>}
        {experience.map((exp) => {
          return (
            <div className="experience-company">
              <div className="company-header">
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIG51jYVCWipRhScOLfdXDJnrWCp_aGqd9Vw&usqp=CAU"
                  }
                  alt={exp.company_name}
                />
                <div>
                  <h4>{exp.company_name}</h4>
                  {/* <p>{exp.duration}</p> */}
                </div>
              </div>
              <div className="company-content">
                {exp.positions.length === 0 && <span>No positions added</span>}
                {exp.positions.map((position) => {
                  let comPosition = {
                    exp_id: exp._id,
                    pos_id: position._id,
                    title: position.title,
                    location: position.location,
                    start_date: position.start_date,
                    end_date: position.end_date,
                    description: position.description,
                  };
                  return (
                    <div className="position-content">
                      <div className="edit-icon">
                        <CreateIcon
                          onClick={() => {
                            setIsDialogOpen(true);
                            setDialogTitle("Edit Experience");
                            dispatch(setSelectedProfileExperience(comPosition));
                          }}
                        />
                      </div>
                      <span className="bullet-point"></span>
                      <h6>{position.title}</h6>
                      <p className="position-type">
                        {position.employment_type}
                      </p>
                      <p className="position-timeline">
                        {`${position?.start_date?.month} ` +
                          position?.start_date?.year +
                          "-" +
                          `${position?.end_date?.month} ` +
                          position?.end_date?.year}
                      </p>
                      <p className="position-place">{position.location}</p>
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
