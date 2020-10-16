// React libraries
import React from "react";
import { useState } from "react";

// Material UI libraries
import { Container, Box, Typography } from '@material-ui/core';

// Components
import { Nav, Title, Form, BookResult } from "../components";

// utils
import API from "../utils/API";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.getBooks(searchTerm)
      .then(res => setBooks(res.data.items))
      .catch(err => console.log(err));
  }

  const handleBookSave = (book) => {
    console.log(book)
    API.saveBook({
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink
    }).then(res => alert("Book has been saved"))
      .catch(err => console.log(err));
  };

  return (
    <>
      <Nav />
      <Container maxWidth="sm">
        <Box component="span" m={1}>
          <Title />
        </Box>
      </Container>
      <Form
        value={searchTerm}
        handleInputChange={handleInputChange}
        onClick={handleFormSubmit}
      />
      <Container maxWidth="sm">
        <Box component="span" m={1}>
          <Typography variant="h6" gutterBottom>
            Results
          </Typography>
        </Box>
      </Container>
      {books.length ? (
        books.map(book => (
          <BookResult
            key={book.id}
            isSave={true}
            title={book.volumeInfo.title}
            subtitle={book.volumeInfo.subtitle}
            author={book.volumeInfo.authors.join(", ")}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.smallThumbnail}
            link={book.volumeInfo.infoLink}
            onClick={() => handleBookSave(book)}
          />
        ))
      ) : (
          <Container maxWidth="sm">
            <Box component="span" m={1}>
              <Typography variant="h5" gutterBottom>
                No results. Try searching a book.
              </Typography>
            </Box>
          </Container>
        )}
    </>
  )
}