import { useState } from "react";
import { useDispatch } from "react-redux";
import LabeledInput from "../../Input/LabeledInput/LabeledInput";
import CurvedButton from "../../Button/CurveButton/CurveButton";
import { Link } from "react-router-dom";
import "./Register.css";

import { registerUser } from "../../../slices/user/userSlice";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="auth-register-container">
      <form
        className="auth-register"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(
            registerUser({
              first_name: firstName,
              last_name: lastName,
              email_id: emailId,
              password,
            })
          );
        }}
      >
        <h2>Register</h2>
        <LabeledInput
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          label="First name"
          isRequired={true}
        />
        <LabeledInput
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          label="Last name"
          isRequired={true}
        />
        <LabeledInput
          value={emailId}
          onChange={(event) => setEmailId(event.target.value)}
          label="Email"
          isRequired={true}
        />
        <LabeledInput
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Password"
          isRequired={true}
          type={"password"}
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
