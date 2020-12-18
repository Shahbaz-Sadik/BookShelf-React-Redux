import React, { Component } from "react";
import { fetchBooks } from "./../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  authUser(book) {
    let token;
    if (window.localStorage.getItem("token")) {
      token = JSON.parse(window.localStorage.getItem("token"));
    }
    if ((this.props.token || token) && book.bookName) {
      return (
        <div className="right floated content" key={book._id}>
          <Link to={`/book/edit/${book.bookName}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/book/delete/${book.bookName}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    if (!this.props.books) {
      return <h5>loading...</h5>;
    } else {
      return this.props.books.map((book) => {
        return (
          <div className="item" style={{ marginTop: " 20px" }} key={book._id}>
            {this.authUser(book)}
            <div className="right floated content">
              <Link to={`/book/details/${book.bookName}`} className="ui button primary">
                Details
              </Link>
            </div>
            <i className="large middle aligned icon book" />
            <div className="content">
              {book.bookName}
              <div className="description">{book.authorName}</div>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Book List</h2>
        <div className="ui segment">
          <div className="ui celled list">{this.renderList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { books: Object.values(state.books), token: state.user.token };
};

export default connect(mapStateToProps, { fetchBooks })(BookList);
