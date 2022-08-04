import logo from './logo.svg';
import './App.css';
import Welcome from "./components/welcome/Welcome";
import Sidebar from "./components/sidebar/sidebar";

import React from "react";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    name: 'Trevor'
  };

  render() {
    return (
      <div className="component-app">
        <Sidebar value={this.state.name || "anon"} />
      </div>
    );
  }
}

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (

//   );
// }

// export default App;
