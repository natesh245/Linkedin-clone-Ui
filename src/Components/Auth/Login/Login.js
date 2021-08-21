import "./Login.css";
import LabeledInput from "../../Input/LabeledInput/LabeledInput";
import CurvedButton from "../../Button/CurveButton/CurveButton";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-login-container">
      <form className="auth-login">
        <h2>Login</h2>
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
        <CurvedButton title="Login in" color="blue" type="submit" />
        <Link to="/auth/register" style={{ display: "block" }}>
          do not have an account? register
        </Link>
      </form>
    </div>
  );
}

export default Login;
