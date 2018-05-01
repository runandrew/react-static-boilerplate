import React from "react";
import { Router, Link } from "react-static";

import { connect } from "react-redux";
import "./header.scss";

class Header extends React.Component {
  handleSubmit() {
    this.props.fetchAuthUser();
  }

  render() {
    return (
      <div>
        <div className="section">
          <div className="container">
            <div className="row right">
              <div>
                {this.props.userRoot.user ? (
                  <p>{this.props.userRoot.user.name}</p>
                ) : (
                  <p>Please sign in</p>
                )}
              </div>
            </div>
            <div className="row">
              <nav>
                <ul className="list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </nav>
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

export default connect(mapStateToProps, null)(Header);
