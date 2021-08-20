import React from "react";
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

      <div className="start-date-container">
        <label htmlFor="start-date">Start Date</label>
        <div className="start-date">
          <input type="text" id="start-month"></input>
          <input type="text" id="start-year"></input>
        </div>
      </div>
      <div className="end-date-container">
        <label htmlFor="end-date">End Date</label>
        <div className="end-date">
          <input type="text" id="end-month"></input>
          <input type="text" id="end-year"></input>
        </div>
      </div>
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
