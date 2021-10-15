import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../Card/Card";
import Avatar from "../../Avatar/Avatar";
import CurveButton from "../../Button/CurveButton/CurveButton";
import CreateIcon from "@material-ui/icons/Create";
import Dialog from "../../Dialog/Dialog";
import EditIntro from "./EditIntro/EditIntro";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import {
  setSelectedProfileIntro,
  addProfileByUserId,
  updateProfileByProfileId,
} from "../../../slices/profile/profileSlice";

import "./ProfileMain.css";

function ProfileMain() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const selectedProfile = useSelector((state) => state.profile.selectedProfile);
  const selectedProfileIntro = useSelector(
    (state) => state.profile.selectedProfileIntro
  );
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const handleSave = () => {
    if (selectedProfileIntro) {
      if (selectedProfile) {
        dispatch(
          updateProfileByProfileId({
            profileId: selectedProfile._id,
            body: selectedProfileIntro,
          })
        );
      } else
        dispatch(
          addProfileByUserId({ userId: user._id, body: selectedProfileIntro })
        );
    }
  };

  if (!selectedProfile) {
    return (
      <>
        <Card width="100%">
          <div
            style={{
              borderRadius: "10px",

              display: "flex",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <div>Add Profile Introduction</div>
            <CurveButton
              color="blue"
              title="Add"
              onClick={() => {
                setIsDialogOpen(true);
                dispatch(setSelectedProfileIntro("new"));
              }}
            ></CurveButton>
          </div>
        </Card>
        <Dialog
          title="Edit Intro"
          isOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          onSave={handleSave}
        >
          <EditIntro />
        </Dialog>
      </>
    );
  }
  return (
    // <div className="profile-main">
    <Card width="100%" height="100%">
      <div className="profile-main__background">
        <img
          className="profile-main__background-image"
          src={
            "data:image/jpeg;base64,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"
          }
          alt="background"
        />
      </div>
      <div className="profile-avatar">
        <Avatar
          width="170px"
          height="170px"
          avatarUrl={
            "data:image/png;base64,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"
          }
        />
      </div>
      <div className="profile-main__details">
        <CreateIcon
          style={{ position: "absolute", right: 10, top: -60 }}
          onClick={() => {
            setIsDialogOpen(true);
            dispatch(
              setSelectedProfileIntro({
                first_name: user.first_name,
                last_name: user.last_name,
                country: selectedProfile.country || "",
                industry: selectedProfile.industry || "",
                current_position: selectedProfile.current_position || "",
                location: selectedProfile.location || "",
                headline: selectedProfile.headline || "",
              })
            );
          }}
        />
        <Dialog
          title="Edit Intro"
          isOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          onSave={handleSave}
        >
          <EditIntro />
        </Dialog>
        <div class="pm-left">
          <h2>{user?.first_name + " " + user?.last_name}</h2>
          <div>{selectedProfile.headline}</div>
          <div className="profile-com-edu">
            <span>SLK .</span>
            <span>Sahyadri college of engineering and management</span>
          </div>
          <div className="profile-place-info">
            <span>
              {`${selectedProfile.location || ""}, ${
                selectedProfile.country || ""
              }`}
            </span>
            <span className="profile-contact-info">
              <a href="">Contact Info</a>
            </span>
          </div>
          <div className="profile-contact-info">
            <a href="">234 connections</a>
          </div>
        </div>
        <div className="pm-right">
          <div className="profile-company-info">
            <img
              src={
                "data:image/png;base64,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"
              }
              alt="company"
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            <div className="company">SLK</div>
          </div>
          <div className="profile-company-info">
            <img
              src={
                "data:image/jpeg;base64,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"
              }
              alt="college"
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            <div className="college">
              Sahyadri college of engineering and management
            </div>
          </div>
        </div>
      </div>
      <div className="profile-button-group">
        <CurveButton title="Open to" color="blue" />
        <CurveButton title="Add Section" color="white" />

        <div className="more-btn">
          <CurveButton title="More" color="white" />
        </div>
        <div className="more-icon">
          <CurveButton
            color="white"
            Icon={MoreHorizIcon}
            style={{
              borderRadius: "50%",
              border: "1px solid black",
              padding: "5px",
            }}
          />
        </div>
      </div>
    </Card>
    // </div>
  );
}

export default ProfileMain;
