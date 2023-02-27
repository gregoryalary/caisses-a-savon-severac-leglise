import React, { type FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Home from "../../home/screens/Home.screen";
import Root from "./Root";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#025c14",
    },
    secondary: {
      main: "#5a2300",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "white",
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
