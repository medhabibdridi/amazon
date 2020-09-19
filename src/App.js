import React, { Component } from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home" ;

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Home/>
      </div>
    );
  }
}

export default App;
