import React from "react";
import { Router, Route } from "react-router-dom";

import BookList from "./books/BookList";
import BookDetails from "./books/BookDetails";
import BookCreate from "./books/BookCreate";
import BookEdit from "./books/BookEdit";
import BookDelete from "./books/BookDelete";
import Header from "./Header";
import SignUp from "./authentication/signUp";
import LogIn from "./authentication/LogIn";
import LogOut from "./authentication/LogOut";
import history from "./../history";

const App = () => {
  return (
    <div className="ui container " style={{ marginTop: "30px" }}>
      <h2 className="ui center aligned icon header">
        <i className="circular book icon"></i>
        Book Shelf App
      </h2>
      <Router history={history}>
        <div>
          <div className="ui segment">
            <Header />
          </div>
          <Route path="/" exact component={BookList} />
          <Route path="/book/new" component={BookCreate} />
          <Route path="/book/edit/:id" component={BookEdit} />
          <Route path="/book/details/:id" component={BookDetails} />
          <Route path="/book/delete/:id" component={BookDelete} />
          <Route path="/book/signup" component={SignUp} />
          <Route path="/book/login" component={LogIn} />
          <Route path="/book/logout" component={LogOut} />
        </div>
      </Router>
    </div>
  );
};

export default App;
