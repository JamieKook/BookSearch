import React from "react";

function Jumbotron() {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundPosition: "center right", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: 'url("https://www.rd.com/wp-content/uploads/2017/10/This-Is-How-Long-It-Takes-To-Read-The-Whole-Dictionary_509582812-Billion-Photos_FB-e1574101045824.jpg")'}}
      className="jumbotron text-white text-left" 
    >
      <h1>React Google Books Search</h1>
      <hr/>
      <h3>Search for and Save Books of Interest</h3>
    </div>
  );
}

export default Jumbotron;
