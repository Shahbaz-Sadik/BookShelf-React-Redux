import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import BookList from "./books/BookList";
import BookDetails from "./books/BookDetails";
import BookCreate from "./books/BookCreate";
import BookEdit from "./books/BookEdit";
import BookDelete from "./books/BookDelete";
import Header from "./Header";
import SignUp from "./authentication/signUp";
import LogIn from "./authentication/LogIn";

const App = () => {
  return (
    <div className="ui container " style={{ marginTop: "30px" }}>
      <h2 className="ui center aligned icon header">
        <i className="circular book icon"></i>
        Book Shelf App
      </h2>
      <BrowserRouter>
        <div>
          <div className="ui segment">
            <Header />
          </div>
          <Route path="/" exact component={BookList} />
          <Route path="/book/new" component={BookCreate} />
          <Route path="/book/edit" component={BookEdit} />
          <Route path="/book/details" component={BookDetails} />
          <Route path="/book/delete" component={BookDelete} />
          <Route path="/book/signup" component={SignUp} />
          <Route path="/book/login" component={LogIn} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
