import React, { Component } from "react";
import './style.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="foot">
          {new Date().getFullYear()}, Taslim Yakub
        </p>

        <nav>
          <li>
            <a href="mailto:taslimer@gmail.com"> email</a>
          </li>
          <li>
            <a href="https://github.com/taslimy" target="_blank">
              github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/taslim-yakub-6b788a13b/"
              target="_blank"
            >
              linkedin
            </a>
          </li>
        </nav>
      </footer>
    );
  }
}
