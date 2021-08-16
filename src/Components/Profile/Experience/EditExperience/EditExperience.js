import React from "react";
import "./EditExperience.css";

function EditExperience(props) {
  return (
    <div className="edit-exp">
      <div className="title">
        <label htmlFor="title-input">Title *</label>
        <input
          type="text"
          id="title-input"
          placeholder="Ex: Retail Sales Manager"
        ></input>
      </div>
      <div className="employment-type">
        <label htmlFor="employment-type-input">Employment Type</label>
        <input
          type="text"
          id="employment-type-input"
          placeholder="Ex: Full time"
        ></input>
      </div>
      <div className="company-name">
        <label htmlFor="company-name">Company Name</label>
        <input
          type="text"
          id="company-name"
          placeholder="Ex: Microsoft"
        ></input>
      </div>
      <div className="location">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="Ex: London, United Kingdom"
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

      <div className="headline">
        <label htmlFor="headline-input">Headline</label>
        <input id="headline-input" type="text"></input>
      </div>
      <div className="industry">
        <label htmlFor="industry-input">Industry</label>
        <input id="industry-input" type="text"></input>
      </div>

      <div className="description">
        <label htmlFor="description-input">Description</label>
        <textarea id="description-input" rows="1" cols="60"></textarea>
      </div>
    </div>
  );
}

export default EditExperience;
