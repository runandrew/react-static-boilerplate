import React from "react";
import { withRouteData, Link } from "react-static";
import Moment from "react-moment";
import Markdown from "react-markdown";
//

export default withRouteData(({ project }) => (
  <div>
    <div className="section">
      <div className="container">
        <p>
          <a href="/" className="right">
            Home
          </a>
        </p>
        <div className="row">
          <div className="col-xs-12 col-md-10 col-lg-8">
            <h1>{project.data.projectName}</h1>
            <div id="top-rectUnder" />
            <h2>{project.data.role}</h2>
            <p>
              <Markdown
                source={`${project.data.year} - ${project.data.description}`}
                escapeHtml={false}
              />
              <Markdown source={project.content} escapeHtml={false} />
            </p>
            <div className="row">
              <div className="col-xs-12 col-sm-10 no-gutter marg-top">
                {project.data.techs.map(tech => (
                  <span className="tag-tech">{tech}</span>
                ))}
              </div>
            </div>
            <hr className="sub-divide" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {project.data.img.map(img => (
              <div className="facade-minimal">
                <a href={`/uploads/${img}`}>
                  <img src={`/uploads/${img}`} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="section" id="footer-sect">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p>&copy; Andrew Garcia 2018 - Designed and built with &#9829;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
));
