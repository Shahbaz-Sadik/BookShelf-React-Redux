import React, { Component } from "react";
import { fetchBooks } from "./../../actions";
import { connect } from "react-redux";

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  renderList() {
    return this.props.books.map((book) => {
      return (
        <div className="item" style={{ marginTop: " 20px" }} key={book._id}>
          <i className="large middle aligned icon book" />
          <div className="content">
            {book.bookName}
            <div className="description">{book.authorName}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2 style={{textAlign: "center"}}>Book List</h2>
        <div className='ui segment'>
        <div className="ui celled list">{this.renderList()}</div>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { books: Object.values(state.books) };
};

export default connect(mapStateToProps, { fetchBooks })(BookList);
