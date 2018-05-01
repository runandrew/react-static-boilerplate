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
              <div className="col-lg-12">
                {this.props.userRoot.user ? (
                  <div>
                    <h2>{`You're logged in ${
                      this.props.userRoot.user.name
                    }!`}</h2>
                  </div>
                ) : (
                  <div>
                    <h2>Please login:</h2>
                    <button onClick={this.handleSubmit.bind(this)}>
                      Login
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userRoot: state.userRoot
});

const mapDispatchToProps = dispatch => ({
  fetchAuthUser: () => dispatch(authUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
