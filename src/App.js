import Header from "./Components/Header/Header";
import "./App.css";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Profile />
      </div>
    </div>
  );
}

export default App;
