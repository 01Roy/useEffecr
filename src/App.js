import Profile from "./Profile";
import "./styles.css";

export default function App() {
  const userID = "Rahul";
  return (
    <div className="App">
      <Profile userId={userID} key={userID} />
    </div>
  );
}
