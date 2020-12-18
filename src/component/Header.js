import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  renderLogin = () => {
    let token;
    if (window.localStorage.getItem("token")) {
      token = JSON.parse(window.localStorage.getItem("token"));
    }
    if (this.props.token || token) {
      return (
        <div className="right menu">
          <Link to="/book/new" className="item">
            <button className="ui blue button">Add Book</button>
          </Link>
          <Link to="/book/logout" className="item">
            <button className="ui red button">Log Out</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="right menu">
          <Link to="/book/signup" className="item">
            <button className="ui blue button">Sign Up</button>
          </Link>
          <Link to="/book/login" className="item">
            <button className="ui red button">Log In</button>
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="ui secondary menu">
        <Link to="/" className="item">
          <button className="ui blue button">Book List</button>
        </Link>
        <div className="right menu">
          {/* <Link to="/book/signup" className="item">
            <button className="ui blue button">Sign Up</button>
          </Link>
          <Link to="/book/login" className="item">
            <button className="ui red button">Log In</button>
          </Link>
          <Link to="/book/logout" className="item">
            <button className="ui red button">Log Out</button>
          </Link> */}
          {this.renderLogin()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.user.token };
};

export default connect(mapStateToProps)(Header);
