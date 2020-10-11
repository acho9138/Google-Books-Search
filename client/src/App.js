// React libraries
import React from "react";

// Material UI libraries
import { Container, Box } from '@material-ui/core';

// Components
import { Nav, Title, Form } from "./components";

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
    </>
  );
}

export default App;
