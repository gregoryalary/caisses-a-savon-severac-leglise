import React, { type FC, memo } from "react";

import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
}

const PageTitle: FC<Props> = ({ title }) => (
  <Box position="relative" width="fit-content" px={2}>
    <Box
      position="absolute"
      top={5}
      bottom={5}
      left={0}
      right={0}
      borderRadius={1}
      sx={{ backgroundColor: "secondary.main", opacity: 0.1, transform: "rotate(-2deg)" }}></Box>
    <Typography variant="h3" sx={{ position: "relative" }}>
      {title}
    </Typography>
  </Box>
);

export default memo(PageTitle);
