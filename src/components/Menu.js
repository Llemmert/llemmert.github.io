import React from "react";
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menu_text:['Home', 'About Us', 'Sample Questions'],
      menu_links:['/', '/about', '/samples']
    };
  }
  render () {
    return (
      <h1 className = "App-menu">
          <span>
          <Link to={this.state.menu_links[0]}>
            {this.state.menu_text[0]}
          </Link>
          &nbsp;&nbsp;
          <Link to={this.state.menu_links[1]}>
          {this.state.menu_text[1]}
          </Link>
          &nbsp;&nbsp;
          <Link to={this.state.menu_links[2]}>
          {this.state.menu_text[2]}
          </Link>
          &nbsp;&nbsp;
          </span>
      </h1>
    );
  }
}

export default Menu;