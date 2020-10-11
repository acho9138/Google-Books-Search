// React libraries
import React from "react";

// Material UI libraries
import { Container, Box } from '@material-ui/core';

// Components
import { Nav, Title } from "./components";

function App() {
  return (
    <>
      <Nav />
      <Container maxWidth="sm">
        <Box component="span" m={1}>
          <Title />
        </Box>
      </Container>
    </>
  );
}

export default App;
