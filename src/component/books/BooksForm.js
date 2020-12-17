import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { fetchBook } from "../../actions";
import { connect } from "react-redux";

class BooksForm extends Component {


  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderField = ({ input, type, label, meta }) => {
    return (
      <div className="ui field">
        <label>{label}</label>
        <div>
          <input {...input} autoComplete="off" type={type} />
          {this.renderError(meta)}
        </div>
      </div>
    );
  };
  onSubmit = (formValue) => {
    this.props.onSubmit(formValue);
  };


  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="bookName" type="text" component={this.renderField} label="Book Name" />
          <Field name="authorName" type="text" component={this.renderField} label="Author Name" />
          <Field name="publishYear" type="text" component={this.renderField} label="Publish Year" />
          <Field name="edition" type="text" component={this.renderField} label="Edition" />
          <Field name="language" type="text" component={this.renderField} label="Language" />
          <Field name="price" type="number" component={this.renderField} label="Price" />
          <div>
            <button className="ui button green">Edit Book</button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.bookName) {
    errors.bookName = "Required";
  }
  if (!values.authorName) {
    errors.authorName = "Required";
  }
  if (!values.publishYear) {
    errors.publishYear = "Required";
  }
  if (!values.edition) {
    errors.edition = "Required";
  }
  if (!values.language) {
    errors.language = "Required";
  }
  if (!values.price) {
    errors.price = "Required";
  }

  return errors;
};

const formWrapper = reduxForm({
  form: "createBook",
  validate,
})(BooksForm);

export default connect(null, { fetchBook })(formWrapper);
