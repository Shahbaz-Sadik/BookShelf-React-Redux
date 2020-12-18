import React, { Component } from "react";
import { connect } from "react-redux";
import { editBook, fetchBook } from "../../actions";
import BookForm from "../books/BooksForm";

class BookEdit extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.book);
  }
  onSubmit = (formValue) => {
    const token = this.props.token;
    this.props.editBook(formValue.bookName, formValue, token);
  };
  editBookError = () => {
    if (this.props.errorMessage) {
      return (
        <div className="ui error message">
          <div className="header">{this.props.errorMessage}</div>
        </div>
      );
    }
  };
  render() {
    const Value = this.props.Details;

    if (!this.props.Details) {
      return <div>Loading....</div>;
    }
    return (
      <div className="ui segment error">
        {this.editBookError()}
        <h3 style={{ textAlign: "center" }}>Edit Book</h3>
        <h4 style={{ textAlign: "center" }}>{this.props.Details.bookName}</h4>
        <BookForm initialValues={Value} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    book: ownProps.match.params.id,
    token: state.user.token,
    Details: state.bookDetails.Details,
    errorMessage: state.user.error.message,
  };
};
export default connect(mapStateToProps, { editBook, fetchBook })(BookEdit);
