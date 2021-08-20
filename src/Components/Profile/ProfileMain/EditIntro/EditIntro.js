import "./EditIntro.css";
import LabeledInput from "../../../Input/LabeledInput/LabeledInput";

function EditIntro() {
  return (
    <div className="edit-intro">
      <LabeledInput
        value=""
        onChange={null}
        label="First Name"
        isRequired={true}
      />
      <LabeledInput
        value=""
        onChange={null}
        label="Last Name"
        isRequired={true}
      />

      <div className="headline">
        <label htmlFor="headline-input">Headline *</label>
        <textarea id="headline-input" rows="1" cols="60"></textarea>
      </div>
      <LabeledInput
        value=""
        onChange={null}
        label="Current Position"
        isRequired={true}
      />
      <LabeledInput
        value=""
        onChange={null}
        label="Education"
        isRequired={true}
      />
      <LabeledInput
        value=""
        onChange={null}
        label="Country/ Region"
        isRequired={true}
      />
      <LabeledInput
        value=""
        onChange={null}
        label="Location in this country/Region"
        isRequired={true}
      />
      <LabeledInput
        value=""
        onChange={null}
        label="Industry"
        isRequired={true}
      />
    </div>
  );
}

export default EditIntro;
