import LabeledInput from "../../Input/LabeledInput/LabeledInput";
import CurvedButton from "../../Button/CurveButton/CurveButton";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="auth-register-container">
      <form className="auth-register">
        <h2>Register</h2>
        <LabeledInput
          value=""
          onChange={null}
          label="First name"
          isRequired={true}
        />
        <LabeledInput
          value=""
          onChange={null}
          label="Last name"
          isRequired={true}
        />
        <LabeledInput
          value=""
          onChange={null}
          label="Email"
          isRequired={true}
        />
        <LabeledInput
          value=""
          onChange={null}
          label="Password"
          isRequired={true}
        />
        <CurvedButton title="Register" color="blue" type="submit" />
        <Link to="/auth/login" style={{ display: "block" }}>
          already have an account? Login in
        </Link>
      </form>
    </div>
  );
}

export default Register;
