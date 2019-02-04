import React, { Component } from "react";
import { connect } from "react-redux";
import { createBook } from "../../actions/index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fields from "./fields";
import DynamicField from "../dynamicField/index";
import { withRouter } from "react-router";

class Book extends Component {
  state = { book: null };
  componentDidMount() {
    let book = {};
    Object.keys(Fields).forEach(field => {
      book[field] = Fields[field].default;
    });
    this.setState({ book });
  }
  createBook = () => {};
  render() {
    return (
      this.state.book && (
        <div className="page">
          <div className="flex-container">
            {Object.keys(Fields).map((field, i) => {
              return (
                <DynamicField
                  key={"book" + field + "new" + i}
                  field={Fields[field]}
                  value={this.state.book[field]}
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
                let { dispatch } = this.props;
                dispatch(createBook(this.state.book));
                this.props.history.push("/books/");
              }}
            >
              Save
            </button>
          </div>
        </div>
      )
    );
  }
}

export default connect()(Book);
