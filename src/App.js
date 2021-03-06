import Header from "./Components/Header/Header";
import "./App.css";
import Profile from "./Pages/Profile/Profile";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { logOutUser } from "./slices/user/userSlice";
import { resetProfile } from "./slices/profile/profileSlice";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import Snackbar from "./Components/Common/FeedBack/Snackbar/Snackbar";
import Loader from "./Components/Common/FeedBack/Loader/Loader";
import jwt_decode from "jwt-decode";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isLoading = useSelector((state) => state.feedback.isLoading);
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/user/profile");
    } else {
      dispatch(resetProfile());
      history.push("/auth/login");
    }
  }, [isLoggedIn, history]);

  useEffect(() => {
    if (user) {
      const decodedToken = jwt_decode(user.token);
      if (Date.now() >= decodedToken.exp * 1000) {
        dispatch(logOutUser());
      }
    }
  }, [location, user, dispatch]);
  return (
    <div className="App">
      {isLoggedIn && <Header />}

      <div className="App-body">
        <Switch>
          <Route path="/" exact component={null} />
          <Route path="/auth/login" exact component={Login} />
          <Route path="/auth/register" exact component={Register} />
          <Route path="/user/profile" exact component={Profile} />
          <Route path="/user/profile/:profileId" exact component={Profile} />
          <Route path="/feed" exact component={null} />
          <Route path="/mynetwork" exact component={null} />
          <Route path="/jobs" exact component={null} />
          <Route path="/messaging" exact component={null} />
          <Route path="/notifications" exact component={null} />
        </Switch>
      </div>
      {isLoading && <Loader />}
      <Snackbar />
    </div>
  );
}

export default App;
