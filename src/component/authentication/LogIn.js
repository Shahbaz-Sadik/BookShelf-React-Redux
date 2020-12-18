import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { userLogin } from "../../actions/index";
import { connect } from "react-redux";

class LogIn extends Component {
  componentDidMount() {
   // console.log(this.props.loginFailed);
  }
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
    this.props.userLogin(formValue);
  };

  render() {
    console.log(this.props.loginFailed);
    console.log(this.props.errorMessage);

    return (
      <div className="ui segment">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="email" type="email" component={this.renderField} label="Email" />
          <Field name="password" type="password" component={this.renderField} label="Password" />
          <div>
            <button className="ui button green">Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const formWrapper = reduxForm({
  form: "LogIn",
  validate,
})(LogIn);

const mapStateToProps = (state) => {
  return {
    loginFailed: state.user.loginFailed,
    errorMessage: state.user,
  };
};

export default connect(mapStateToProps, { userLogin })(formWrapper);
