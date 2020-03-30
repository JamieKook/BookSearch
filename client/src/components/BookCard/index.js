import React from "react";
import "./style.css"; 

function BookCard(props) {
  return (
    <div className="card">
        <div className="row">
            <div className="col-sm-4">
                <h4 className="mx-4 my-3">{props.title}</h4>
                <h6 className="mx-4">Written By {props.authors}</h6>
            </div>
           <div className="col-sm-8 d-flex justify-content-end">
           <button type="button" className="bookBtn btn btn-success m-2"><a className="bookLink" target="_blank" href={props.link}>View</a></button>
           <button type="button" className="bookBtn btn btn-info m-2"><a className="bookLink" href="/saved" target="_blank">{props.buttonName}</a></button>
           </div>
        </div>
        <div className="row m-3">
            <div className="col-sm-4 d-flex justify-content-center">
                <img className= "img-fluid" src={props.img}/>
            </div>
            <div className="col-sm-8">
                <p>{props.description}</p>
            </div>
        </div>
      ,
,    </div>
  );
}

export default BookCard;