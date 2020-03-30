import React from "react";

function BookCard(props) {
  return (
    <div className="card">
        <div className="row">
            <div className="col-sm-4">
                <h4 className="mx-4 my-3">{props.title}</h4>
                <h6>{props.subtitle}</h6>
                <h6 className="mx-4">Written By {props.authors}</h6>
            </div>
           <div className="col-sm-8 d-flex justify-content-end">
           <button type="button" className="btn btn-success m-2">View</button>
           <button type="button" className="btn btn-info m-2">{props.buttonName}</button>
           </div>
        </div>
        <div className="row">
            <div className="col-sm-4">
                <img src={props.img}/>
            </div>
            <div className="col-sm-8">
                <p>{props.description}</p>
            </div>
        </div>
      
    </div>
  );
}

export default BookCard;