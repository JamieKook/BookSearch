import React from "react";
import "./style.css"; 
import {useBooksContext} from "../../utils/GlobalState"; 

function BookCard(props) {
    const [state, dispatch]= useBooksContext(); 

    const createBookObject= (event)=>{
        event.preventDefault(); 
        const bookObject = {title: props.title,
                            authors: props.authors,
                            description: props.description,
                            image: props.img,
                            link: props.link}
        console.log(bookObject); 
        return bookObject; 
    }; 

    console.log(state.savedBooks); 

  return (
    <div className="card">
        <div className="row">
            <div className="col-sm-4">
                <h4 className="mx-4 my-3">{props.title}</h4>
                <h6 className="mx-4">Written By {props.authors}</h6>
            </div>
           <div className="col-sm-8 d-flex justify-content-end">
           <button type="button" className="bookBtn btn btn-success m-3"><a className="bookLink" target="_blank" href={props.link}>View</a></button>
           <button type="button" className="bookBtn btn btn-info m-3"><a  onClick={(props.buttonName==="Save")? ((event)=>dispatch({type: "addBook", newBook: createBookObject(event)})): (()=> "")} className="bookLink" href="/saved" target="_blank">{props.buttonName}</a></button>
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