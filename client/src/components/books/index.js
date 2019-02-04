import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { deleteBook } from "../../actions/index";
import { booksSelector } from "../../selectors/index";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class Books extends Component {
  render() {
    return (
      <div className="page">
        <div className="wrapper">
          <h1>Books</h1>
        </div>
        {this.props.books.length && (
          <div className="flex-container">
            {this.props.books.map((book, i) => {
              console.log(book.title);
              return (
                <div key={"book" + i} className={"book"}>
                  <img
                    src={
                      "https://loremflickr.com/g/320/240/book?random=" + book.id
                    }
                    alt="placeholder img"
                  />
                  <h2>
                    <Link to={"/books/view/" + book.id}>{book.title}</Link>
                  </h2>
                  <p>
                    <Link to={"/books/edit/" + book.id}>edit</Link> •{" "}
                    <button
                      className="link"
                      onClick={() => {
                        const { dispatch } = this.props;
                        dispatch(deleteBook(book));
                      }}
                    >
                      delete
                    </button>
                  </p>
                  <p>{book.ISBN}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = state => {
  return booksSelector(state);
};

export default connect(mapStateToProps)(Books);
