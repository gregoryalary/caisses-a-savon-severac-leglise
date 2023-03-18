import React, { type FC } from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop.component";

const Root: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Root;
