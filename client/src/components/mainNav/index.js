import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

class MainNav extends Component {
  render() {
    return (
      <div className="mainNav">
        <ul>
          <li>
            <Link to="/books/">Books</Link>
          </li>
          <li>
            <Link to="/books/new/">Add Book</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(MainNav);
