import React, { type FC, memo } from "react";
import { Link } from "react-router-dom";

import { Box, Stack, Typography } from "@mui/material";

const Logo: FC = memo(function Logo() {
  return (
    <Link to="/">
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Box component="img" src="/img/logo.png" sx={{ height: 32 }} />
        <Stack>
          <Typography color="primary.main" fontSize={14}>
            Caisses à savon
          </Typography>
          <Typography color="text.secondary" fontSize={11}>
            Sévérac l&apos;église
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
});

export default Logo;
