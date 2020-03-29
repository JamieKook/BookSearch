import React from "react";

function Searchbar() {
  return (
    <div className="container">
        <form className="form-inline m-3" action="/">
            <h2 className="m-5">Book Search</h2>
            <input className="m-3" type="text" placeholder="Book Title"/>
            <button className="btn btn-secondary m-3" type="submit">Search</button>
        </form>
    </div>
  );
}

export default Searchbar;

