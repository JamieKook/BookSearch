import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Searchbar from "../components/Searchbar"; 
import CardContainer from "../components/CardContainer"; 
import BookCard from "../components/BookCard"; 

function Search() {
    return (
        <div className="container">
            <Searchbar/>
            <CardContainer>
                <BookCard/>
                <BookCard/>
            </CardContainer>
        </div>
    )
}

export default Search;
