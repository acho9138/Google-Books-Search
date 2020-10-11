// React libraries
import React from "react";

// Material UI libraries
import { Container, Box, Typography } from '@material-ui/core';

// Components
import { Form, BookResult } from "../components";

export const Search = () => {
  return (
    <>
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
  )
}