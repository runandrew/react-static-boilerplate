import React from "react";
import { withRouteData } from "react-static";
//

export default withRouteData(({ about }) => (
  <div>
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-lg-8" id="about-row">
            <h1>{about.data.title}</h1>
            <h2>{about.data.date}</h2>
            <p>{about.data.p1}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
));