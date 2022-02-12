import React from "react";
import "./App.css";
import Main from '@mui/material/Utils';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import MenuItem from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';

function App() {
  return (
    <Box sx={{ flexGrow: 8, display: "flex", justifyContent: "space-between" }}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuItem />
          </IconButton>
          <Typography align="center" variant="h6" color="black" component="div"/>
            Wordle for nerds
          <Typography align="right" variant="h6" color="black" component="div"/>
          <GitHubIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;
