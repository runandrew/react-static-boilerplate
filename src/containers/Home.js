import React from "react";
import { withRouteData } from "react-static";
//

export default withRouteData(({ home }) => (
  <div>
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-lg-8" id="about-row">
            <h1>{home.data.title}</h1>
            <h2>{home.data.date}</h2>
            <p>{home.data.p1}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
));
