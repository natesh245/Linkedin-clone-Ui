import React from "react";
import "./EditEducation.css";
import LabeledInput from "../../../Input/LabeledInput/LabeledInput";
import LabeledTextArea from "../../../Input/LabeledTextArea/LabeledTextArea";

function EditEducation(props) {
  return (
    <div className="edit-edu">
      <LabeledInput
        label="School"
        value=""
        onChange={null}
        placeholder="Ex: Boston University"
      />
      <LabeledInput
        label="Degree"
        value=""
        onChange={null}
        placeholder="Ex: Bachelor's"
      />
      <LabeledInput
        label="Field Of Study"
        value=""
        onChange={null}
        placeholder="Ex: Business"
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
      <LabeledInput label="Grade" value="" onChange={null} placeholder="" />

      <LabeledTextArea
        text=""
        onChange={null}
        label="Activities And Societies"
        maxlength={500}
        placeholder="Ex Alpa Phi Omega, Marching Band, Volley Ball"
      />

      <LabeledTextArea
        text=""
        onChange={null}
        label="Description"
        maxlength={500}
      />
    </div>
  );
}

export default EditEducation;
