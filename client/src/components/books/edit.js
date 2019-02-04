import React, { Component } from "react";
import { updateBook, deleteBook } from "../../actions/index";
import { bookSelector } from "../../selectors/index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Fields from "./fields";
import DynamicField from "../dynamicField/index";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { book: { ...props.book } };
  }
  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      let { book } = nextProps;
      this.setState({ book });
    }
  }
  render() {
    if (!this.state.book || !this.props.book) return null;
    return (
      this.state.book && (
        <div className="page">
          <div className="wrapper">
            <Link to={"/books/view/" + this.props.book.id}>view</Link>
          </div>
          <div className="flex-container">
            {Object.keys(Fields).map((field, i) => {
              return (
                <DynamicField
                  key={"book" + field + "edit" + i}
                  field={Fields[field]}
                  value={this.state.book[field] || ""}
                  onChange={e => {
                    let { book } = this.state;
                    book[field] = e.target.value;
                    this.setState({ book });
                  }}
                />
              );
            })}
          </div>
          <div className="wrapper">
            <button
              onClick={() => {
                const { dispatch } = this.props;
                if (dispatch(updateBook(this.state.book))) {
                  this.props.history.push("/books/");
                }
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                let { dispatch } = this.props;
                dispatch(deleteBook(this.state.book));
                this.props.history.push("/books/");
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return { book: bookSelector(state, ownProps) };
};

export default connect(mapStateToProps)(Book);
