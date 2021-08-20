import "./LabeledInput.css";

function LabeledInput({ label, value, onChange, isRequired, placeholder }) {
  return (
    <div className="labeled-input">
      <label htmlFor="labeled-input-input">{label}</label>
      <input
        type="text"
        id="labeled-input-input"
        // value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default LabeledInput;
