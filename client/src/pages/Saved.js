import React, { useState, useEffect } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer"; 
import BookCard from "../components/BookCard"; 

function Saved() {
    return (
        <div className="container">
            <h2 className="m-5">Saved Books</h2>
            <CardContainer>
                <BookCard
                    buttonName="Delete"
                />
                <BookCard
                    buttonName="Delete"
                />
            </CardContainer>
        </div>
    )
}

export default Saved;
