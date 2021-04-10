import React from "react";
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render () {
    return (
      <h1 className = "App-menu">
          <span>
          <Link to="/">
            Home
          </Link>
          &nbsp;&nbsp;
          <Link to="/about">
            About Us
          </Link>
          &nbsp;&nbsp;
          <Link to="/samples">
            Sample Questions
          </Link>
          &nbsp;&nbsp;
          <Link to="/answers">
            Answers
          </Link>
          </span>
      </h1>
    );
  }
}

export default Menu;