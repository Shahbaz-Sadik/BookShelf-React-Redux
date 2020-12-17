import React, { Component } from "react";
import { connect } from "react-redux";
import { editBook, fetchBook } from "../../actions";
import BookForm from "../books/BooksForm";

class BookEdit extends Component {
  componentDidMount() {
    console.log(this.props.book);
    this.props.fetchBook(this.props.book);
  }
  onSubmit = (formValue) => {
    const token = this.props.token;
    console.log(formValue.bookName);
    this.props.editBook(formValue.bookName, formValue, token);
  };

  // componentDidUpdate = () => {
  //   setTimeout(this.render(), 5000);
  // };

  render() {
    if(!this.props.Details){
      return(<div>Loading....</div>)
    }
    return (
      <div>
        <BookForm initialValues={this.props.Details} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    book: ownProps.match.params.id,
    token: state.user.token,
    Details: state.bookDetails.Details,
  };
};
export default connect(mapStateToProps, { editBook, fetchBook })(BookEdit);
