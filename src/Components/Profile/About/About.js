import React, { useState } from "react";
import "./About.css";
import CreateIcon from "@material-ui/icons/Create";
import Card from "../../Card/Card";
import EditSummary from "./EditSummary/EditSummary";
import Dialog from "../../Dialog/Dialog";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedProfileSummary,
  addProfileByUserId,
  updateProfileByProfileId,
} from "../../../features/profile/profileSlice";
function About() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const selectedProfile = useSelector((state) => state.profile.selectedProfile);
  const selectedProfileSummary = useSelector(
    (state) => state.profile.selectedProfileSummary
  );
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const handleSave = () => {
    if (selectedProfileSummary) {
      if (selectedProfile) {
        dispatch(
          updateProfileByProfileId({
            profileId: selectedProfile._id,
            body: selectedProfileSummary,
          })
        );
      } else
        dispatch(
          addProfileByUserId({ userId: user._id, body: selectedProfileSummary })
        );
    }
  };
  return (
    // <div className="profile-about">
    <>
      <Dialog
        title="Edit Summary"
        isOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        onSave={handleSave}
      >
        <EditSummary />
      </Dialog>
      <Card>
        <div className="about-heading">
          <h2>About</h2>
          <CreateIcon
            onClick={() => {
              setIsDialogOpen(true);
              dispatch(
                setSelectedProfileSummary({
                  description: selectedProfile.description || "",
                })
              );
            }}
          />
        </div>
        <div className="about-content">
          {selectedProfile?.description || "No decription"}
        </div>
      </Card>
    </>
    // </div>
  );
}

export default About;
