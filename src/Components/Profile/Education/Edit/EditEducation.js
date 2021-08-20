import React from "react";
import "./EditEducation.css";
import LabeledInput from "../../../Input/LabeledInput/LabeledInput";
import LabeledTextArea from "../../../Input/LabeledTextArea/LabeledTextArea";
import MonthYear from "../../../Input/DatePicker/MonthYearPicker/MonthYear";

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

      <MonthYear label="Start Date" onChange={null} />
      <MonthYear label="End Date" onChange={null} />
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
