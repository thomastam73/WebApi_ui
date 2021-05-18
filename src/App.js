import React from "react";
import { SnackbarProvider } from "notistack";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
// routes
import Routes from "./Routes";
// mui themes
import theme from "./theme";
// Global variable
import global from "./global";

window.siteSetting = global;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Router>
          <Routes />
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
