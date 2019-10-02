import React from "react";
import "./App.css";
import Usercard from "./Usercard";
import UserFollowerCard from "./UserFollowerCard";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className="App">
        <Usercard />
        <UserFollowerCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
