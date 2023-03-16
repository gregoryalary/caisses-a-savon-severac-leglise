import React, { type FC } from "react";

import { Box, Container, Divider, Stack, Typography } from "@mui/material";

import PageTitle from "../../app/components/PageTitle";

const Partners: FC = () => {
  return (
    <Box component={Container} py={4}>
      <Stack spacing={4}>
        <PageTitle title="Partenaires" />
        <Divider />
        <Typography>Todo</Typography>
      </Stack>
    </Box>
  );
};

export default Partners;
