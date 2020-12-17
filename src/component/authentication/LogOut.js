import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogOut } from "../../actions";

class LogOut extends Component {
  componentDidMount() {
    this.props.userLogOut();
  }
  render() {
    return <div>Log Out</div>;
  }
}

export default connect(null, { userLogOut })(LogOut);
