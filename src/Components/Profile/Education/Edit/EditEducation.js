import React from "react";
import "./EditEducation.css";

function EditEducation(props) {
  return (
    <div className="edit-edu">
      <div className="school">
        <label htmlFor="schoolinput">School *</label>
        <input
          type="text"
          id="school-input"
          placeholder="Ex: Boston University"
        ></input>
      </div>
      <div className="degree">
        <label htmlFor="degree-input">Degree</label>
        <input
          type="text"
          id="degree-input"
          placeholder="Ex: Bachelor's"
        ></input>
      </div>
      <div className="field-of-study">
        <label htmlFor="field-of-study">Field Of Study</label>
        <input
          type="text"
          id="field-of-study"
          placeholder="Ex: Business"
        ></input>
      </div>
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

      <div className="grade">
        <label htmlFor="grade-input">Grade </label>
        <input id="grade-input" type="text"></input>
      </div>
      <div className="activity-and-societies">
        <label htmlFor="activity-and-societies-input">
          Activities And Societies
        </label>
        <textarea
          id="activity-and-societies-input"
          rows="1"
          cols="60"
        ></textarea>
      </div>
      <div className="description">
        <label htmlFor="description-input">Description</label>
        <textarea id="description-input" rows="1" cols="60"></textarea>
      </div>
    </div>
  );
}

export default EditEducation;
