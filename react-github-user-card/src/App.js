import React from "react";
import "./App.css";
import Usercard from "./Usercard";
import UserFollowerCard from "./UserFollowerCard";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box bg="gray.100">
        <Usercard />
        <UserFollowerCard />
      </Box>
    </ThemeProvider>
  );
}

export default App;
