import React from "react";
import { withRouteData } from "react-static";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    const {
      userRoot: { user }
    } = this.props;
    return (
      <div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 col-lg-8" id="about-row">
                <h1>Home Title</h1>
                <p>This is a paragraph for the home page</p>
                {user && (
                  <div>
                    <h2>Looks like you're logged in!</h2>
                    <p>{`${user.name} - ${user.email}`}</p>
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

const mapStateToProps = (state, ownProps) => ({
  userRoot: state.userRoot,
  ...ownProps
});

export default withRouteData(connect(mapStateToProps, null)(Home));
