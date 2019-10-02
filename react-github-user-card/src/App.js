import React from "react";
import "./App.css";
import Usercard from "./Usercard";
import UserFollowerCard from "./UserFollowerCard";

function App() {
  return (
    <div className="App">
      <Usercard />
      <UserFollowerCard />
    </div>
  );
}

export default App;
