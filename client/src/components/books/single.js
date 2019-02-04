import React, { Component } from "react";
import BooksService from "../../services/books.js";
import { bookSelector } from "../../selectors/index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class Book extends Component {
  render() {
    return (
      this.props && (
        <div className="page">
          <div className="wrapper">
            <Link to={"/books/edit/" + this.props.id}>edit</Link>
            <h1>{this.props.title}</h1>
            <h2>{this.props.ISBN}</h2>
            <p>{this.props.notes}</p>
          </div>
        </div>
      )
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return bookSelector(state, ownProps);
};

export default connect(mapStateToProps)(Book);
