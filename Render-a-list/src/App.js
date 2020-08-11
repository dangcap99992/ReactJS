import React, { Component } from 'react';
import logo from './logo.svg';
import Table from "./table/Table"
import './App.css';
class App extends Component{
render(){
  return(
    <div className="App">
      <h2>HTML Table</h2>
      <Table />
    </div>
  )
}
}

export default App;
