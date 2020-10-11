// React libraries
import React from "react";

// Material UI libraries
import { Container, Box, Typography } from '@material-ui/core';

// Components
import { Nav, Title, Form, BookResult } from "./components";

function App() {

  return (
    <>
      <Nav />
      <Container maxWidth="sm">
        <Box component="span" m={1}>
          <Title />
        </Box>
      </Container>
      <Form />
      <Container maxWidth="sm">
        <Box component="span" m={1}>
          <Typography variant="h6" gutterBottom>
            Results
          </Typography>
        </Box>
      </Container>
      <BookResult />
    </>
  );
}

export default App;
