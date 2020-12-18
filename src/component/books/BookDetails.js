import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBook } from "../../actions";

class BookDetails extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.book);
  }
  render() {
    if (!this.props.Details) {
      return <div>Loading...</div>;
    }
    return (
      <div className="ui segment">
        <h3 style={{ textAlign: "center" }}>Book Details</h3>
        <div className="ui celled list">
          <div className="item" style={{ marginTop: " 20px" }}>
            <div className="content">
              Book Name:
              <div className="header">{this.props.Details.bookName}</div>
            </div>
          </div>
          <div className="item" style={{ marginTop: " 20px" }}>
            <div className="content">
              Author Name:
              <div className="header">{this.props.Details.authorName}</div>
            </div>
          </div>
          <div className="item" style={{ marginTop: " 20px" }}>
            <div className="content">
              Publish Year:
              <div className="header">{this.props.Details.publishYear}</div>
            </div>
          </div>
          <div className="item" style={{ marginTop: " 20px" }}>
            <div className="content">
              Edition:
              <div className="header">{this.props.Details.edition}</div>
            </div>
          </div>
          <div className="item" style={{ marginTop: " 20px" }}>
            <div className="content">
              Language:
              <div className="header">{this.props.Details.language}</div>
            </div>
          </div>
          <div className="item" style={{ marginTop: " 20px" }}>
            <div className="content">
              Price:
              <div className="header">{this.props.Details.price}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Details: state.bookDetails.Details,
    book: ownProps.match.params.id,
  };
};

export default connect(mapStateToProps, { fetchBook })(BookDetails);
