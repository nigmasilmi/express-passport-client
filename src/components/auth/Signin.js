import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { signin } from "../../actions";

class Signin extends Component {
  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label className="ui label">Email</label>
          <Field
            className="ui input"
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        {this.props.errorMessage && (
          <div className="ui pointing red basic label">
            {this.props.errorMessage}
          </div>
        )}
        <fieldset>
          <label className="ui label">Password</label>
          <Field
            className="ui input"
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>

        <button className="ui button primary">Sign in</button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};
export default compose(
  connect(mapStateToProps, { signin }),
  reduxForm({ form: "signup" })
)(Signin);
