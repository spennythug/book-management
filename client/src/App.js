import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import { getAllBooks } from "./actions/index";
import { messageSelector } from "./selectors/index";

import MainNav from "./components/mainNav/index";

import Books from "./components/books/index";
import Book from "./components/books/single";
import EditBook from "./components/books/edit";
import NewBook from "./components/books/new";

import "./App.css";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAllBooks());
  }
  render() {
    return (
      <div className="wrapper">
        {this.props.message && (
          <div className={"app-message " + this.props.message.className}>
            <button
              onClick={() => {
                const { dispatch } = this.props;
                dispatch({ type: "SET_MESSAGE", payload: false });
              }}
            >
              <span className="fas fa-times-circle" />
            </button>
            {this.props.message.text}
          </div>
        )}
        <Router>
          <div>
            <div>
              <MainNav />
              <Route exact path="/" render={() => <Redirect to="/books" />} />
              <Route path="/books/" exact component={Books} />
              <Route
                path="/books/view/:id"
                exact
                component={props => <Book {...props} />}
              />
              <Route
                path="/books/edit/:id"
                exact
                component={props => <EditBook {...props} />}
              />
              <Route
                path="/books/new/"
                exact
                component={props => <NewBook {...props} />}
              />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return messageSelector(state);
};

export default connect(mapStateToProps)(App);
