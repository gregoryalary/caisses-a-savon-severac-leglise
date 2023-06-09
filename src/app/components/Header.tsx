import React, { type FC, type MouseEvent, useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  useTheme,
} from "@mui/material";

import Logo from "./Logo";

const Header: FC = () => {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="relative" elevation={4}>
      <Container>
        <Toolbar>
          <Logo />

          <Box flexGrow={1} />

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              MenuListProps={{ sx: { p: 0 } }}>
              <Link to="https://association-centre-grezes.fr/" target="_blank">
                <MenuItem>
                  <ListItemText>DITEP de Grèzes</ListItemText>
                </MenuItem>
              </Link>
              <Link to="/partenaires">
                <MenuItem>
                  <ListItemText>partenaires</ListItemText>
                </MenuItem>
              </Link>
              <Link to="/team-gabba">
                <MenuItem>
                  <ListItemText>Team Gabba</ListItemText>
                </MenuItem>
              </Link>
              <Divider />
              <Link to="/inscription">
                <MenuItem sx={{ backgroundColor: theme.palette.primary.main }}>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { color: "white", fontWeight: "bold" },
                    }}
                    primary="Inscription"></ListItemText>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Stack direction="row" spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
            <Button href="https://association-centre-grezes.fr/" target="_blank">
              DITEP de Grèzes
            </Button>
            <Button component={Link} to="/partenaires">
              partenaires
            </Button>
            <Button component={Link} to="/team-gabba">
              Team Gabba
            </Button>
            <Button component={Link} to="/inscription" variant="contained">
              Inscription
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
