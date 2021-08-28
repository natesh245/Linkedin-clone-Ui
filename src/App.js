import Header from "./Components/Header/Header";
import "./App.css";
import Profile from "./Pages/Profile/Profile";

import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const history = useHistory();
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/user/profile");
    } else {
      history.push("/auth/login");
    }
  }, [isLoggedIn, history]);
  return (
    <div className="App">
      {isLoggedIn && <Header />}
      <div className="App-body">
        <Switch>
          <Route path="/" exact component={null} />
          <Route path="/auth/login" exact component={Login} />
          <Route path="/auth/register" exact component={Register} />
          <Route path="/user/profile" exact component={Profile} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
