// React libraries
import React from 'react';
import { Link } from "react-router-dom";

// Material UI libraries
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

// Styles
import { styles } from "./Nav.styles";

// Component
export default function Nav() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Google Books
          </Typography>
          <Button color="inherit"><Link className={classes.links} to="/">Search</Link></Button>
          <Button color="inherit"><Link className={classes.links} to="saved">Saved</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}