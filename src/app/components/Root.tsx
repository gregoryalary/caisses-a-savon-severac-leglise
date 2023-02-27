import React, { type FC } from "react";
import { Outlet } from "react-router-dom";

import { AppBar, Box, Button, Container, Stack, Toolbar } from "@mui/material";

const Root: FC = () => {
  return (
    <>
      <AppBar position="sticky">
        <Container>
          <Toolbar>
            <Box flexGrow={1} />
            <Stack direction="row">
              <Button>DITEP de Grèzes</Button>
              <Button>Paternaires</Button>
              <Button>Team Gabba</Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Root;
