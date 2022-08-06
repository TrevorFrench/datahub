import logo from './logo.svg';
import './App.css';
import Welcome from "./components/welcome/Welcome";
import Sidebar from "./components/sidebar/sidebar";
import Balances from "./components/balances/balances";

import React from "react";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    name: 'Trevor',
    data: null
  };
  componentDidMount() {
    // get all entities - GET
    fetch("https://api.covalenthq.com/v1/1/address/trevorfrench.eth/balances_v2/?key=ckey_b4b32958c0e8491dba4cdcf7965", {
      "method": "GET",
      "headers": {
      }
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        data: response.data.items
      })
    })
    .catch(err => { console.log(err); 
    });
  }
  handleClick = () => {
    console.log('this is:', this);
  };
  balances = () => {
    
  };

  render() {
    return (
      <div className="component-app">
        <Sidebar value={this.state.name || "anon"} function={this.handleClick} balances={this.balances}/>
        <Balances data={this.state.data} />
        
      </div>
    );
  }
}