// React libraries
import React, { useState, useEffect } from "react";

// Material UI libraries
import { Container, Box, Typography } from '@material-ui/core';

// Components
import { Nav, Title, Form, BookResult } from "../components";

// utils
import API from "../utils/API";


export const Saved = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  const loadBooks = () => {
    API.getSavedBooks()
      .then(res => setSavedBooks(res.data))
      .catch(err => console.log(err));
  };

  const deleteBook = (id) => {
    API.deleteBook(id)
      .then(() => {
        loadBooks()
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    loadBooks()
  }, [])

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
      {savedBooks.length ? (
        savedBooks.map(book => {
          return (
            <BookResult
              key={book._id}
              isSave={false}
              title={book.title}
              subtitle={book.subtitle}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              onClick={() => deleteBook(book._id)}
            />
          );
        })
      ) : (
          <Container maxWidth="sm">
            <Box component="span" m={1}>
              <Typography variant="h5" gutterBottom>
                No saved books.
              </Typography>
            </Box>
          </Container>
        )}

    </>
  )
}