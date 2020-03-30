import React from "react";

function BookCard(props) {
  return (
    <div className="card">
        <div className="row">
            <div className="col-sm-4">
                <h4 className="mx-4 my-3">Title</h4>
                <h5 className="mx-4">Written By authors</h5>
            </div>
           <div className="col-sm-8 d-flex justify-content-end">
           <button type="button" className="btn btn-success m-2">View</button>
           <button type="button" className="btn btn-info m-2">{props.buttonName}</button>
           </div>
        </div>
        <div className="row">
            <div className="col-sm-4">
                <img/>
            </div>
            <div className="col-sm-8">
                <p>Description</p>
            </div>
        </div>
      
    </div>
  );
}

export default BookCard;