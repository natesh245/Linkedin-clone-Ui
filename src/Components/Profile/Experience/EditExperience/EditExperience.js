import React from "react";
import MonthYear from "../../../Input/DatePicker/MonthYearPicker/MonthYear";
import LabeledDropDown from "../../../Input/LabeledDropDown/LabeledDropDown";
import LabeledInput from "../../../Input/LabeledInput/LabeledInput";
import LabeledTextArea from "../../../Input/LabeledTextArea/LabeledTextArea";

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
  return (
    <div className="edit-exp">
      <LabeledInput
        value={""}
        onChange={null}
        placeholder={"Ex: Retail Sales Manager"}
        label="Title"
      />

      <LabeledDropDown
        value=""
        onChange={null}
        label="Employment Type"
        options={empTypeOptions}
      />
      <LabeledInput
        value={""}
        onChange={null}
        placeholder={"Ex: Microsoft"}
        label="Company Name"
      />
      <LabeledInput
        value={""}
        onChange={null}
        placeholder={"Ex: London, United Kingdom"}
        label="Location"
      />

      <MonthYear label="Start Date" onChange={null} />
      <MonthYear label="End Date" onChange={null} />
      <LabeledInput
        value={""}
        onChange={null}
        placeholder={""}
        label="Headline"
      />

      <LabeledTextArea
        text={""}
        onChange={null}
        label="Description"
        maxlength={2000}
      />
    </div>
  );
}

export default EditExperience;
