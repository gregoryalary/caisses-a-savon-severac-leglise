import React, { type FC } from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import Footer from "./Footer";
import Header from "./Header";

const Root: FC = () => {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Root;
