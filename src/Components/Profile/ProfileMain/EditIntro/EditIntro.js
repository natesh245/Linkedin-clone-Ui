import "./EditIntro.css";

function EditIntro() {
  return (
    <div className="edit-intro">
      <div className="name">
        <div className="first-name">
          <label htmlFor="firt-name-input">First Name *</label>
          <input type="text" id="first-name-input"></input>
        </div>
        <div className="last-name">
          <label htmlFor="last-name-input">Last Name *</label>
          <input type="text" id="last-name-input"></input>
        </div>
      </div>
      <div className="headline">
        <label htmlFor="headline-input">Headline *</label>
        <textarea id="headline-input" rows="1" cols="60"></textarea>
      </div>
      <div className="current-position">
        <label htmlFor="current-position-input">Current Position </label>
        <input id="current-position-input" type="text"></input>
      </div>
      <div className="education">
        <label htmlFor="education-input">Education </label>
        <input id="education-input" type="text"></input>
      </div>
      <div className="country">
        <label htmlFor="country-input">Country/ Region </label>
        <input id="country-input" type="text"></input>
      </div>
      <div className="location">
        <label htmlFor="location-input">
          Location in this Country/ Region{" "}
        </label>
        <input id="location-input" type="text"></input>
      </div>
      <div className="industry">
        <label htmlFor="industry-input">Industry </label>
        <input id="industry-input" type="text"></input>
      </div>
    </div>
  );
}

export default EditIntro;
