import React, { useEffect } from "react";
import "./EditEducation.css";
import LabeledInput from "../../../Input/LabeledInput/LabeledInput";
import LabeledTextArea from "../../../Input/LabeledTextArea/LabeledTextArea";
import MonthYear from "../../../Input/DatePicker/MonthYearPicker/MonthYear";

import { useSelector, useDispatch } from "react-redux";
import { setSelectedProfileEducation } from "../../../../slices/profile/profileSlice";

function EditEducation(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const selectedProfile = useSelector((state) => state.profile.selectedProfile);
  const selectedProfileEducation = useSelector(
    (state) => state.profile.selectedProfileEducation
  );

  const handleMonthChange = (field, value) => {
    dispatch(
      setSelectedProfileEducation({
        ...selectedProfileEducation,
        [field]: {
          ...selectedProfileEducation[field],
          month: value,
        },
      })
    );
  };

  const handleYearChange = (field, value) => {
    dispatch(
      setSelectedProfileEducation({
        ...selectedProfileEducation,
        [field]: {
          ...selectedProfileEducation[field],
          year: value,
        },
      })
    );
  };

  const handleChange = (field, value) => {
    dispatch(
      setSelectedProfileEducation({
        ...selectedProfileEducation,
        [field]: value,
      })
    );
  };

  useEffect(() => {
    return () => {
      dispatch(setSelectedProfileEducation(null));
    };
  }, []);
  return (
    <div className="edit-edu">
      <LabeledInput
        label="School"
        value={selectedProfileEducation?.school || ""}
        onChange={(event) => handleChange("school", event.target.value)}
        placeholder="Ex: Boston University"
      />
      <LabeledInput
        label="Degree"
        value={selectedProfileEducation?.degree || ""}
        onChange={(event) => handleChange("degree", event.target.value)}
        placeholder="Ex: Bachelor's"
      />
      <LabeledInput
        label="Field Of Study"
        value={selectedProfileEducation?.field_of_study || ""}
        onChange={(event) => handleChange("field_of_study", event.target.value)}
        placeholder="Ex: Business"
      />

      <MonthYear
        label="Start Date"
        onMonthChange={(event) =>
          handleMonthChange("start_date", event.target.value)
        }
        onYearChange={(event) =>
          handleYearChange("start_date", event.target.value)
        }
        monthValue={selectedProfileEducation?.start_date?.month || ""}
        yearValue={selectedProfileEducation?.start_date?.year || ""}
      />
      <MonthYear
        label="End Date"
        onMonthChange={(event) =>
          handleMonthChange("end_date", event.target.value)
        }
        onYearChange={(event) =>
          handleYearChange("end_date", event.target.value)
        }
        monthValue={selectedProfileEducation?.end_date?.month || ""}
        yearValue={selectedProfileEducation?.end_date?.year || ""}
      />
      <LabeledInput
        label="Grade"
        value={selectedProfileEducation.grade}
        onChange={(event) => handleChange("grade", event.target.value)}
        placeholder=""
      />

      <LabeledTextArea
        text={selectedProfileEducation?.activities_and_societies || ""}
        onChange={(event) =>
          handleChange("activities_and_societies", event.target.value)
        }
        label="Activities And Societies"
        maxlength={500}
        placeholder="Ex Alpa Phi Omega, Marching Band, Volley Ball"
      />

      <LabeledTextArea
        text={selectedProfileEducation?.description || ""}
        onChange={(event) => handleChange("description", event.target.value)}
        label="Description"
        maxlength={500}
      />
    </div>
  );
}

export default EditEducation;
