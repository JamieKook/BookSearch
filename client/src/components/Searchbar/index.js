import React, {useRef, useEffect} from "react";
import {useBooksContext} from "../../utils/GlobalState"; 

function Searchbar(props) {
  const [state, dispatch]= useBooksContext(); 

  const searchInput = useRef(); 

  const handleInputChange= ()=>{
    dispatch({type: "handleSearchInput", "searchInput": searchInput.current.value}); 
    console.log(state.searchInput); 
  }

  useEffect(()=>{
    handleInputChange(); 
  }, []); 

  return (
    <div className="container">
        <form className="form-inline m-3" action="/">
            <h2 className="m-5">Book Search</h2>
            <input ref={searchInput} onChange={()=>handleInputChange()} className="m-3" type="text" placeholder="Book Search Term"/>
            <button onClick={props.handleFormSubmit} className="btn btn-secondary m-3" type="submit">Search</button>
        </form>
    </div>
  );
}

export default Searchbar;

