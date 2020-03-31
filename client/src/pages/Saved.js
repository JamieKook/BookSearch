import React, { useState, useEffect } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer"; 
import BookCard from "../components/BookCard"; 
import {useBooksContext} from "../utils/GlobalState"; 

function Saved() {
    const [state, dispatch]= useBooksContext(); 

    useEffect(() => {
        loadBooks()
      }, [])
    
      // Loads all books and sets them to books
      function loadBooks() {
        API.getBooks()
          .then(res =>
            dispatch({type: "getAllBooks", allBooks: res.data})
          )
          .catch(err => console.log(err));
      };

    return (
        <div className="container">
            <h2 className="m-5">Saved Books</h2>
            <CardContainer>
                {(!state.savedBooks.length) ? (
                <h1 className="text-center">No Books matched your search</h1>
                ) : (
                state.savedBooks.map(book => (
                    <BookCard
                     key={book._id}
                     buttonName= "Delete"
                     title= {book.title}
                     authors= {book.authors? (book.authors) : ("[author data not avaliable]")}
                     img= {book.image? (book.image) : ("https://placehold.it/300x300")}
                     description= {book.description}
                     link={book.link}
                    />
                )) 
                )}
            </CardContainer>
        </div>
    )
}

export default Saved;
