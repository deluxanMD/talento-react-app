import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "components/logo/logo.component";
import {
  AppBar,
  Box,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { TLButton } from "components/forms/fields/tl-button/tl-button.component";
import { MouseEvent, useState } from "react";

const pages = ["Jobs", "Companies"];

export const TLAppbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={1}
      data-testid="AppBar.Container"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo withName sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            data-testid="AppBar.Mobile.Menu"
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
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
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  data-testid="AppBar.Mobile.MenuItem"
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem
                onClick={handleCloseNavMenu}
                data-testid="AppBar.Mobile.MenuItem"
              >
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                data-testid="AppBar.Mobile.MenuItem"
              >
                <Typography textAlign="center">Signup</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Logo sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            data-testid="AppBar.Desktop.Menu"
          >
            {pages.map((page) => (
              <TLButton
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
                data-testid="AppBar.Desktop.MenuItem"
              >
                {page}
              </TLButton>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <TLButton variant="outlined" data-testid="AppBar.Desktop.Login">
              Login
            </TLButton>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ marginLeft: 2, marginRight: 2 }}
            />
            <TLButton variant="contained" data-testid="AppBar.Desktop.Signup">
              Signup
            </TLButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
