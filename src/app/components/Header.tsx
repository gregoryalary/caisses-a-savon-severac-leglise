import React, { type FC } from "react";
import { Link } from "react-router-dom";

import { AppBar, Box, Button, Container, Stack, Toolbar } from "@mui/material";

const Header: FC = () => (
  <AppBar position="sticky">
    <Container>
      <Toolbar>
        <Box flexGrow={1} />
        <Stack direction="row">
          <Button href="https://association-centre-grezes.fr/" target="_blank">
            DITEP de Grèzes
          </Button>
          <Button component={Link} to="/partenaires">
            Paternaires
          </Button>
          <Button component={Link} to="/team-gabba">
            Team Gabba
          </Button>
        </Stack>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
