import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import BookList from "./books/BookList";
import BookDetails from "./books/BookDetails";
import BookCreate from "./books/BookCreate";
import BookEdit from "./books/BookEdit";
import BookDelete from "./books/BookDelete";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={BookList} />
          <Route path="/book/new" component={BookCreate} />
          <Route path="/book/edit" component={BookEdit} />
          <Route path="/book/details" component={BookDetails} />
          <Route path="/book/delete" component={BookDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
