import React from "react";

function Searchbar(props) {
  return (
    <div className="container">
        <form className="form-inline m-3" action="/">
            <h2 className="m-5">Book Search</h2>
            <input onChange={props.handleInputChange} className="m-3" type="text" placeholder="Book Title"/>
            <button onClick={props.handleFormSubmit} className="btn btn-secondary m-3" type="submit">Search</button>
        </form>
    </div>
  );
}

export default Searchbar;

