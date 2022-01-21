import React from 'react';
import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom";
import "styles/index.css";
import "styles/reset.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import history from "utils/history";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Router } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#411196",
    },
    white: {
      main: "#fff",
    },
    blue: {
      main: "#4877F8",
    },
    print: {
      main: "#fe0b95",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <App />
          <CssBaseline />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
