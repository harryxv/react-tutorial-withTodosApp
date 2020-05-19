import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./components/Home"
import About from './components/About'
import Todo from "./components/Todo";


class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/todo" component={Todo} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
