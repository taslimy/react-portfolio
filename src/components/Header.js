import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
      <header>
        <h1>
          <Link to="/">
            Taslim Yakub
            <em className="webdev"> &LT; web developer &sol; &GT; </em>
          </Link>
        </h1>
        <nav>
          <input type="checkbox" id="nav" className="hidden" />
          <label for="nav" class="nav-open">
            <i />
            <i />
            <i />
          </label>
          <div className="nav-container">
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact">Bio &amp; Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header> 
      </Fragment>
    );
  }
}
