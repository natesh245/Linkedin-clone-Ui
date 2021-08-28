import { useState } from "react";
import { useDispatch } from "react-redux";

import "./Login.css";
import LabeledInput from "../../Input/LabeledInput/LabeledInput";
import CurvedButton from "../../Button/CurveButton/CurveButton";
import { Link } from "react-router-dom";

import { loginUser } from "../../../features/user/userSlice";

function Login() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="auth-login-container">
      <form
        className="auth-login"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(
            loginUser({
              email_id: emailId,
              password,
            })
          );
        }}
      >
        <h2>Login</h2>
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
        <CurvedButton title="Login in" color="blue" type="submit" />
        <Link to="/auth/register" style={{ display: "block" }}>
          do not have an account? register
        </Link>
      </form>
    </div>
  );
}

export default Login;
