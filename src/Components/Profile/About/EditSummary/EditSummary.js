import "./EditSummary.css";
import { useState, useEffect } from "react";
import LabeledTextArea from "../../../Input/LabeledTextArea/LabeledTextArea";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProfileSummary } from "../../../../slices/profile/profileSlice";

function EditSummary() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const selectedProfile = useSelector((state) => state.profile.selectedProfile);
  const selectedProfileSummary = useSelector(
    (state) => state.profile.selectedProfileSummary
  );
  const handleChange = (field, value) => {
    dispatch(
      setSelectedProfileSummary({
        ...selectedProfileSummary,
        [field]: value,
      })
    );
  };

  useEffect(() => {
    return () => {
      dispatch(setSelectedProfileSummary(null));
    };
  }, []);
  return (
    <div className="edit-summary">
      <LabeledTextArea
        text={selectedProfileSummary?.description || ""}
        onChange={(event) => handleChange("description", event.target.value)}
        label="Summary"
        maxlength={2600}
      />
    </div>
  );
}

export default EditSummary;
