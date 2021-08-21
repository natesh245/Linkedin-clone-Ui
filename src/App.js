import Header from "./Components/Header/Header";
import "./App.css";
import Profile from "./Pages/Profile/Profile";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./features/user/userSlice";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // useEffect(() => {
  //   dispatch(loginUser());
  // }, []);
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
