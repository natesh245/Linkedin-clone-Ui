import Header from "./Components/Header/Header";
import "./App.css";
import Profile from "./Pages/Profile/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginUser());
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Profile />
      </div>
    </div>
  );
}

export default App;
