import React, { type FC } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Container,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Logo from "./Logo";

const Footer: FC = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box component="footer">
      <Paper elevation={10}>
        <Container>
          <Stack py={4} direction={{ xs: "column", md: "row" }} alignItems="center" spacing={4}>
            <Logo />

            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              spacing={{ xs: 1, md: 2 }}>
              {[
                {
                  label: "DITEP de Grèzes",
                  to: "https://association-centre-grezes.fr/",
                  target: "_blank",
                },
                { label: "Inscription", to: "/inscription", target: "" },
              ].map(({ label, to, target }) => (
                <Link key={label} component={RouterLink} to={to} target={target} variant="body1">
                  {label}
                </Link>
              ))}
            </Stack>

            {isMd && <Box flexGrow={{ xs: 0, md: 1 }} />}

            <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>
              © 2023
            </Typography>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
};

export default Footer;
