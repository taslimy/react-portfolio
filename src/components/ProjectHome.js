import React, { Component } from "react";
import "./style.css";

export default class ProjectHome extends Component {
  render() {
    return (
      <section>
        <ul className="project-list">
          <li className="project4">
            <a href="project4">
              <div className="project-title">
                <h2>dev. theme</h2>
                <h3>This is a free minimalist flexbox theme for developers.</h3>
                <h4>
                  Learn More
                  <i className="fas fa-arrow-circle-right" />
                </h4>
              </div>
              <div className="img-container">
                <img src="https://taslim.me/project4/dev.png" alt="Dev Theme" />
              </div>
            </a>
          </li>
        </ul>
      </section>
    );
  }
}
