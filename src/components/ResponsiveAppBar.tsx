import MenuIcon from "@mui/icons-material/Menu";
import MovieIcon from "@mui/icons-material/Movie";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export type ResponsiveAppBarNavMenuItem = {
  path: string;
  label: string;
};

type ResponsiveAppBarProps = {
  title: string;
  navMenuItems: ResponsiveAppBarNavMenuItem[];
};

export default function ResponsiveAppBar({
  title,
  navMenuItems,
}: ResponsiveAppBarProps) {
  const [anchorElNav, setAnchorElNav] = useState<undefined | HTMLElement>();
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(undefined);
  const navigate = useNavigate();
  const handleNavMenuItemClick = ({ path }: ResponsiveAppBarNavMenuItem) => {
    handleCloseNavMenu();
    navigate(path);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MovieIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
          {navMenuItems.length > 0 && (
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
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
                {navMenuItems.map((navMenuItem) => (
                  <MenuItem
                    key={navMenuItem.path}
                    onClick={() => handleNavMenuItemClick(navMenuItem)}
                  >
                    <Typography textAlign="center">
                      {navMenuItem.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          <MovieIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navMenuItems.map((navMenuItem) => (
              <Button
                key={navMenuItem.path}
                onClick={() => handleNavMenuItemClick(navMenuItem)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {navMenuItem.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
