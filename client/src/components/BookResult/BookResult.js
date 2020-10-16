// React libraries
import React from 'react';

// Material UI libraries
import { Paper, Typography, Grid, Button, Box } from '@material-ui/core';

// Custom
import { styles } from "./BookResult.style"

const BookResult = (props) => {
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
              <Typography variant="h6" gutterBottom>{props.title}</Typography>
              <Typography variant="subtitle1" gutterBottom>{props.subtitle}</Typography>
              <Typography variant="subtitle2" gutterBottom>Written by: {props.author}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" href={props.link} className={classes.buttons}>View</Button>
              {props.isSave ? (
                <Button variant="contained" color="primary" onClick={props.onClick} className={classes.buttons}>Save</Button>
              ) : (
                  <Button variant="contained" color="secondary" onClick={props.onClick} className={classes.buttons}>Delete</Button>
                )}
            </Grid>
            <Grid item xs={3}>
              <img src={props.image} alt="book cover" />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1" gutterBottom>
                {props.description}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}

export default BookResult