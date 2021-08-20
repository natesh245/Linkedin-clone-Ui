import "./LabeledTextArea.css";
function LabeledTextArea({ text, onChange, label, maxlength, placeholder }) {
  return (
    <div className="text-area-container">
      <div className="text-area">
        <label for="textarea">{label}</label>
        <textarea
          id="textarea"
          rows="4"
          cols="50"
          maxlength={maxlength}
          onChange={onChange}
          placeholder={placeholder}
        >
          {text}
        </textarea>
        <p className="char-count">
          {text.length}/{maxlength}
        </p>
      </div>
    </div>
  );
}

export default LabeledTextArea;
