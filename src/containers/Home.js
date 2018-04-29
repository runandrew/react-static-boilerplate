import React from "react";
import { withSiteData, withRouteData } from "react-static";
//

export default withRouteData(({ projects }) => (
  <div>
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-lg-8" id="about-row">
            <h1>Home</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
));
