import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="ui secondary menu">
      <Link to="/" className="item">
        <button className="ui blue button">Book List</button>
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          <button className="ui blue button">Book Shelf</button>
        </Link>
        <Link to="/book/signup" className="item">
          <button className="ui blue button">Sign Up</button>
        </Link>
        <Link to="/book/login" className="item">
          <button className="ui red button">Log In</button>
        </Link>
      </div>
    </div>
  );
}
