// React libraries
import React from 'react';

// Material UI libraries
import { AppBar, Toolbar, Typography, Button, Link } from '@material-ui/core';

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
          <Button color="inherit"><Link to="search">Search</Link></Button>
          <Button color="inherit"><Link to="saved">Saved</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}