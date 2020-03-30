import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search"; 
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron"; 
import { BooksProvider} from "./utils/GlobalState"; 


function App() {
  const [savedBooks, setSavedBooks]=useState([]); 

  return (
    <Router>
      <div>
        <BooksProvider>
          <Nav/>
          <Jumbotron/>
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
          </Switch>
        </BooksProvider>
      </div>
    </Router>
  );
}

export default App;
