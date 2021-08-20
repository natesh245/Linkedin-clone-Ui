import "./EditSummary.css";
import { useState } from "react";
import LabeledTextArea from "../../../Input/LabeledTextArea/LabeledTextArea";

function EditSummary() {
  const [text, setText] = useState("");
  return (
    <div className="edit-summary">
      <LabeledTextArea
        text={text}
        onChange={setText}
        label="Summary"
        maxlength={2600}
      />
    </div>
  );
}

export default EditSummary;
