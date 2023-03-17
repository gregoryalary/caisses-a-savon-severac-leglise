import React, { type FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";

// Screens
import Enrolment from "../../enrolment/screens/Enrolment.screen";
import Home from "../../home/screens/Home.screen";
import Partners from "../../partners/screens/Partners.screen";
import StoryTelling from "../../story-telling/screens/StoryTelling.screen";
import Root from "./Root";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#d83047",
    },
    secondary: {
      main: "#8bb3f0",
    },
  },
  typography: {
    h1: {
      fontFamily: "Racing Sans One",
      fontSize: 64,
    },
    h2: {
      fontWeight: "normal",
      fontSize: 48,
    },
    h3: {
      fontWeight: "normal",
      fontSize: 36,
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
      {
        path: "/team-gabba",
        element: <StoryTelling />,
      },
      {
        path: "/partenaires",
        element: <Partners />,
      },
      {
        path: "/inscription",
        element: <Enrolment />,
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
