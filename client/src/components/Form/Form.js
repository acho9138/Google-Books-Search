// React libraries
import React from 'react';

// Material UI libraries
import { TextField, Grid, Button, Paper, Box } from '@material-ui/core';

// Styles
import { styles } from "./Form.styles";

// Component
const Form = (props) => {
  const classes = styles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper elevation={3} className={classes.paper}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={9}>
            <form className={classes.form} autoComplete="off">
              <TextField
                id="outlined-search"
                fullWidth
                label="Book Search"
                type="search"
                variant="outlined"
                onChange={props.handleInputChange}
                value={props.value}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button onClick={props.onClick} size="large" variant="contained" color="primary">
              Search
              </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Form; 