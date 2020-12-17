import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteBook } from "../../actions";

class BookDelete extends Component {
  componentDidMount() {
    const token = this.props.token;
    console.log(token);
    this.props.deleteBook(this.props.match.params.id, token);
  }
  render() {
    
    return <div>Deleting....</div>;
  }
}

const mapStateToProps = (state) => {
  return { token: state.user.token };
};

export default connect(mapStateToProps, { deleteBook })(BookDelete);
