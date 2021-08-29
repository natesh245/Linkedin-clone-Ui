import React, { useEffect } from "react";
import MonthYear from "../../../Input/DatePicker/MonthYearPicker/MonthYear";
import LabeledDropDown from "../../../Input/LabeledDropDown/LabeledDropDown";
import LabeledInput from "../../../Input/LabeledInput/LabeledInput";
import LabeledTextArea from "../../../Input/LabeledTextArea/LabeledTextArea";

import { useSelector, useDispatch } from "react-redux";
import { setSelectedProfileExperience } from "../../../../features/profile/profileSlice";

import "./EditExperience.css";

const empTypeOptions = [
  "Please select",
  "Full time",
  "Part time",
  "self employed",
  "Freelance",
  "Trainee",
];

function EditExperience(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const selectedProfile = useSelector((state) => state.profile.selectedProfile);
  const selectedProfileExperience = useSelector(
    (state) => state.profile.selectedProfileExperience
  );

  const handleMonthChange = (field, value) => {
    dispatch(
      setSelectedProfileExperience({
        ...selectedProfileExperience,
        [field]: {
          ...selectedProfileExperience[field],
          month: value,
        },
      })
    );
  };

  const handleYearChange = (field, value) => {
    dispatch(
      setSelectedProfileExperience({
        ...selectedProfileExperience,
        [field]: {
          ...selectedProfileExperience[field],
          year: value,
        },
      })
    );
  };

  const handleChange = (field, value) => {
    dispatch(
      setSelectedProfileExperience({
        ...selectedProfileExperience,
        [field]: value,
      })
    );
  };

  useEffect(() => {
    return () => {
      dispatch(setSelectedProfileExperience(null));
    };
  }, []);
  return (
    <div className="edit-exp">
      <LabeledInput
        value={selectedProfileExperience?.title || ""}
        onChange={(event) => handleChange("title", event.target.value)}
        placeholder={"Ex: Retail Sales Manager"}
        label="Title"
      />
      <LabeledDropDown
        value={selectedProfileExperience?.employment_type || ""}
        onChange={(event) =>
          handleChange("employment_type", event.target.value)
        }
        label="Employment Type"
        options={empTypeOptions}
      />
      <LabeledInput
        value={selectedProfileExperience?.company_name || ""}
        onChange={(event) => handleChange("company_name", event.target.value)}
        placeholder={"Ex: Microsoft"}
        label="Company Name"
      />
      <LabeledInput
        value={selectedProfileExperience?.location || ""}
        onChange={(event) => handleChange("location", event.target.value)}
        placeholder={"Ex: London, United Kingdom"}
        label="Location"
      />
      <MonthYear
        label="Start Date"
        onMonthChange={(event) =>
          handleMonthChange("start_date", event.target.value)
        }
        onYearChange={(event) =>
          handleYearChange("start_date", event.target.value)
        }
        monthValue={selectedProfileExperience?.start_date?.month || ""}
        yearhValue={selectedProfileExperience?.start_date?.year || ""}
      />
      <MonthYear
        label="End Date"
        onMonthChange={(event) =>
          handleMonthChange("end_date", event.target.value)
        }
        onYearChange={(event) =>
          handleYearChange("end_date", event.target.value)
        }
        monthValue={selectedProfileExperience?.end_date?.month || ""}
        yearhValue={selectedProfileExperience?.end_date?.year || ""}
      />

      <LabeledInput
        value={selectedProfile?.headline || ""}
        onChange={(event) => handleChange("headline", event.target.value)}
        placeholder={""}
        label="Headline"
      />
      <LabeledTextArea
        text={selectedProfileExperience?.description || ""}
        onChange={(event) => handleChange("description", event.target.value)}
        label="Description"
        maxlength={2000}
      />
    </div>
  );
}

export default EditExperience;
