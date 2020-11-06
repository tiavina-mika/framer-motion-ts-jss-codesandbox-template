import * as React from "react";
import { ThemeProvider } from "react-jss";

import { theme } from "../utils/theme";
import Animated from "./components/Animated";
import "./styles.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Animated />
    </ThemeProvider>
  );
};

export default App;
