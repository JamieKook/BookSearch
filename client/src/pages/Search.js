import React, { useState, useEffect } from "react";
import API from "../utils/API";
import GoogleAPI from "../utils/GoogleAPI"; 
import Searchbar from "../components/Searchbar"; 
import CardContainer from "../components/CardContainer"; 
import BookCard from "../components/BookCard"; 

function Search() {
    const [books, setBooks]= useState([])
    const [searchTerm, setSearchTerm] = useState([])

    function handleInputChange(event){
        const {value}= event.target; 
        setSearchTerm(value); 
    }; 

    function handleFormSubmit(event) {
        event.preventDefault(); 
        GoogleAPI.getGoogleBooks(searchTerm)
            .then((bookData)=>{
                setBooks(bookData.data.items); 
                console.log(bookData.data.items); 
            })
            .catch((err)=>{
                console.log(err)
            }); 
    }; 

    return (
        <div className="container">
            <Searchbar
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
            />
            <CardContainer>
                {books.map(book => (
                    <BookCard
                     buttonName= "Save"
                     title= {book.volumeInfo.title}
                     authors= {book.volumeInfo.authors[0]}
                     img= {book.volumeInfo.imageLinks.thumbnail}
                     description= {book.volumeInfo.description}
                    />
                ))}
            </CardContainer>
        </div>
    )
}

export default Search;