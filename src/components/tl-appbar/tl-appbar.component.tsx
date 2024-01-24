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
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "global/theme/theme.slice";
import { RootState } from "store";

const pages = ["Talents", "Members"];

export const TLAppbar = () => {
  const mode: "light" | "dark" = useSelector(
    (state: RootState) => state.theme.mode
  );
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleThemeMode = () => {
    dispatch(setMode(mode === "light" ? "dark" : "light"));
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      data-testid="AppBar.Container"
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Logo withName sx={{ display: { xs: "none", md: "flex" } }} />

          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            data-testid="AppBar.Mobile.Menu"
          >
            <Logo sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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

          <IconButton
            size="large"
            onClick={handleThemeMode}
            color="primary"
            data-testid="AppBar.Theme.Toggle"
            sx={{
              mr: 2,
              borderRadius: 0,
              height: 38,
            }}
          >
            {mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>

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
