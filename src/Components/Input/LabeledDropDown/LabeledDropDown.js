import "./LabeledDropDown.css";
function LabeledDropDown({ label, options, value, onChange }) {
  return (
    <div className="labeled-dropdown">
      {label && <label htmlFor="labeled-dropdown-select">{label}</label>}
      <select
        name="labeled-dropdown-select"
        id="labeled-dropdown-select"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default LabeledDropDown;
