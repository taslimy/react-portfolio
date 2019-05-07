import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import ProjectHome from "./components/ProjectHome";

import Footer from "./components/Footer";
import Contact from "./components/Contact";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
        <Header />
        </div>
        <Route exact path="/" component={ProjectHome} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
