import React from "react";
import { withRouteData } from "react-static";

import { connect } from "react-redux";
import { authUser } from "../../../lib/redux/entities/user/user.actions";

class Login extends React.Component {
  handleSubmit() {
    this.props.fetchAuthUser();
  }

  render() {
    return (
      <div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 col-lg-8" id="about-row">
                <button onClick={this.handleSubmit.bind(this)}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAuthUser: () => dispatch(authUser())
});

export default connect(null, mapDispatchToProps)(Login);
