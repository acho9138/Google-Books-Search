// React Library
import React from 'react';

// Material UI libraries
import Typography from '@material-ui/core/Typography';

// Styles
import { styles } from "./Title.styles"

// Component
export default function Title() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Google Books Search
      </Typography>
      <Typography variant="h5" gutterBottom>
        Search and Save Books of Interest
      </Typography>
    </div>
  );
}
