import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../../actions";

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }
  render() {
    return <div>Sorry to see you go. Come back any time.</div>;
  }
}

export default connect(null, { signout })(Signout);
