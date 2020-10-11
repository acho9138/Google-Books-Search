// React libraries
import React from 'react';

// Material UI libraries
import { Paper, Typography, Grid, Button, Box } from '@material-ui/core';

// Custom
import { styles } from "./BookResult.style"

export default function Variants() {
  const classes = styles();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Paper className={classes.paper} variant="outlined">
          <Grid container className={classes.title} spacing={3}>
            <Grid item xs={9}>
              <Typography variant="h6" gutterBottom>Book Title</Typography>
              <Typography variant="subtitle1" gutterBottom>Book Subtitle</Typography>
              <Typography variant="subtitle2" gutterBottom>Written by: Author</Typography>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained">View</Button>
              <Button variant="contained" color="primary">
                Save
            </Button>
            </Grid>
            <Grid item xs={3}>
              <img src={"https://via.placeholder.com/150"} />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}
