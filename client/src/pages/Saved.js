// React libraries
import React from "react";

// Material UI libraries
import { Container, Box, Typography } from '@material-ui/core';

// Components
import { Nav, Title, Form, BookResult } from "../components";

export const Saved = () => {
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
            Saved Books
          </Typography>
        </Box>
      </Container>
      <BookResult isSave={false} />
    </>
  )
}