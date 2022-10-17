import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export const Navigation = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="logo"
            src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
          />
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            BURGERS
          </Button>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            ADMIN
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
