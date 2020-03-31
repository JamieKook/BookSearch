import React, { useState} from "react";
import API from "../utils/API";
import GoogleAPI from "../utils/GoogleAPI"; 
import Searchbar from "../components/Searchbar"; 
import CardContainer from "../components/CardContainer"; 
import BookCard from "../components/BookCard"; 
import {useBooksContext} from "../utils/GlobalState"; 

function Search() {
    const [books, setBooks]= useState([])
    const [searchTerm, setSearchTerm] = useState([])
    const [searched, setSearched]= useState(false); 

    const [state, dispatch] = useBooksContext(); 

    // function handleInputChange(event){
    //     const {value}= event.target; 
    //     setSearchTerm(value); 
    // }; 

    function handleFormSubmit(event) {
        event.preventDefault(); 
        GoogleAPI.getGoogleBooks(state.searchInput)
            .then((bookData)=>{
                setSearched(true); 
                if (bookData.data.totalItems !==0){
                    setBooks(bookData.data.items);    
                } else {
                    setBooks(["none"]); 
                }
            })
            .catch((err)=>{
                console.log(err)
            }); 
    }; 

    return (
        <div className="container">
            <Searchbar
                handleFormSubmit={handleFormSubmit}
                // handleInputChange={handleInputChange}
            />
            <CardContainer>
                {(books[0]==="none" && searched) ? (
                <h1 className="text-center">No Books matched your search</h1>
                ) : (
                books.map(book => (
                    <BookCard
                     key={book.id}
                     buttonName= "Save"
                     title= {book.volumeInfo.title}
                     authors= {book.volumeInfo.authors? (book.volumeInfo.authors[0]) : ("[author data not avaliable]")}
                     img= {book.volumeInfo.imageLinks? (book.volumeInfo.imageLinks.thumbnail) : ("https://placehold.it/300x300")}
                     description= {book.volumeInfo.description}
                     link={book.volumeInfo.infoLink}
                    />
                )) 
                )}
            </CardContainer>
        </div>
    )
}

export default Search;