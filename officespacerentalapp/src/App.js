
import React, { Component } from 'react';
import './App.css';
class App extends Component{
  render(){
    const element='Office Space';
    const item={Name:'DBS',Rent:50000,Address:'chennai'};
    const colors=((item.Rent<=60000)?"red":"green");

    return(
      <div>
        <h1>{element}, at Affordable Range</h1>
        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" width="20%" height="20%"/>
        <h1>Name: {item.Name}</h1>
        <h3 id={colors}>Rent: Rs. {item.Rent}</h3>
        <h3>Address: {item.Address}</h3>
      </div>
    )
  }
}
export default App;
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
