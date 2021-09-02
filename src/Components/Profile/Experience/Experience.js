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

  const handleDelete = () => {
    const experiences = experience
      .map((exp) => {
        if (exp._id === selectedProfileExperience.exp_id) {
          const positions = exp.positions.filter(
            (pos) => pos._id !== selectedProfileExperience.pos_id
          );
          return { ...exp, positions };
        }
        return exp;
      })
      .filter((exp) => exp.positions.length > 0);
    dispatch(
      updateProfileByProfileId({
        profileId: selectedProfile._id,
        body: {
          experience: experiences,
        },
      })
    );
  };

  const handleSave = () => {
    if (selectedProfileExperience) {
      if (selectedProfile) {
        let companies = selectedProfile.experience;
        const selectedPosition = { ...selectedProfileExperience };
        const selectedCompany = {
          _id: selectedProfileExperience.exp_id,
          company_name: selectedProfileExperience.company_name,
        };

        if (selectedCompany._id === "") {
          const existingCompany = companies.find(
            (comp) => comp.company_name === selectedCompany.company_name
          );
          if (existingCompany) {
            const existingPosition = existingCompany.positions.find(
              (pos) => pos._id === selectedPosition.pos_id
            );
            let positions = existingCompany.positions;
            if (existingPosition) {
              positions = positions.map((pos) => {
                if (pos._id === existingPosition._id) {
                  return {
                    ...selectedPosition,
                  };
                } else return pos;
              });
            } else {
              positions = [...positions, selectedPosition];
            }
            companies = [
              ...companies.filter((comp) => comp._id !== existingCompany._id),
              {
                _id: existingCompany._id,
                company_name: existingCompany.company_name,
                positions,
              },
            ];
          } else {
            companies = [
              ...companies,
              {
                company_name: selectedCompany.company_name,
                positions: [selectedPosition],
              },
            ];
          }
        } else if (selectedCompany._id) {
          companies = companies.map((comp) => {
            if (comp._id === selectedCompany._id) {
              let positions = comp.positions;
              positions = positions.map((pos) => {
                if (pos._id === selectedPosition.pos_id) {
                  return {
                    ...selectedPosition,
                  };
                } else {
                  return pos;
                }
              });
              return {
                ...comp,
                positions,
              };
            } else {
              return comp;
            }
          });
        }

        dispatch(
          updateProfileByProfileId({
            profileId: selectedProfile._id,
            body: {
              experience: companies,
            },
          })
        );
      } else {
        const company = {
          company_name: selectedProfileExperience.company_name,
          positions: [selectedProfileExperience],
        };

        dispatch(
          addProfileByUserId({
            userId: user._id,
            body: {
              experience: [company],
            },
          })
        );
      }
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
          onDelete={
            !!selectedProfile &&
            !!selectedProfileExperience &&
            !!selectedProfileExperience.pos_id &&
            handleDelete
          }
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
                    company_name: exp.company_name,
                    title: position.title,
                    location: position.location,
                    start_date: position.start_date,
                    end_date: position.end_date,
                    description: position.description,
                    employment_type: position.employment_type,
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
