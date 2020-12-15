import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { createUser } from "../../actions/index";
import { connect } from "react-redux";

class signUp extends Component {
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
    
    this.props.createUser(formValue);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="name" type="text" component={this.renderField} label="Username" />
          <Field name="email" type="email" component={this.renderField} label="Email" />
          <Field name="password" type="password" component={this.renderField} label="Password" />
          <Field name="passwordConfirm" type="password" component={this.renderField} label="Confirm Password" />
          <div>
            <button className="ui button green">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Required";
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = "Password did not match";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "signUp",
  validate,
})(signUp);

export default connect(null, { createUser })(formWrapped);
