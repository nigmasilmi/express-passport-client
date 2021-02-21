import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="ui five item menu">
        <Link to="/" className="item">
          Redux Auth
        </Link>
        <Link to="/signup" className="item">
          Sign up
        </Link>
        <Link to="/signin" className="item">
          Sign in
        </Link>
        <Link to="/feature" className="item">
          Feature
        </Link>
        <Link to="/signout" className="item">
          Sign out
        </Link>
      </div>
    );
  }
}

export default Header;
