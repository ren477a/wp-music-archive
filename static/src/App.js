import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Home from "./components/Home";
import About from "./components/About";
import SongRegister from "./components/SongRegister";
import SongSearch from "./components/SongSearch";
import Err from "./components/Err";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/search" component={SongSearch} />
            <Route path="/register" component={SongRegister} />
            <Route component={Err} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
