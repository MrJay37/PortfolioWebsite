import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Page404 from "./404";
import Music from "./music";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/music" exact component={Music} />
          <Route path="/404" component={Page404} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
