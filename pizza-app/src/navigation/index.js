import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const buttonStyles = { my: 2, color: "white", display: "block" };

export const Navigation = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="logo"
            src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
          />
          <Button component={Link} to="/" sx={{ ml: 2, ...buttonStyles }}>
            HOME
          </Button>

          <Button component={Link} to="/menu" sx={buttonStyles}>
            MENU
          </Button>
          <Button component={Link} to="/admin" sx={buttonStyles}>
            ADMIN
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
