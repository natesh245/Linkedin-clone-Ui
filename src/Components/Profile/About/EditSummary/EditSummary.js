import "./EditSummary.css";
import { useState } from "react";

function EditSummary() {
  const [text, setText] = useState("Hello");
  return (
    <div className="edit-summary">
      <div className="edit-description">
        <label for="textarea">Description</label>
        <textarea
          id="textarea"
          rows="4"
          cols="50"
          maxlength="2600"
          onChange={(e) => setText(e.target.value)}
        >
          {text}
        </textarea>
      </div>
      <p className="char-count">{text.length}/2600</p>
    </div>
  );
}

export default EditSummary;
