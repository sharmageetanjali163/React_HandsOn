
import React, { Component } from 'react';
import './App.css';
import Form from './form.js';
class App extends Component{
  state={
    count:0
  }
  Increment=()=>{
    alert("Hello Member!");
    return this.setState({
      count:this.state.count+1
    })
  }
  Decrement=()=>{
    return this.setState({
      count:this.state.count-1
    })
  }
  SayWelcome=()=>{
    alert("welcome");
  }
  ClickOnMe=()=>{
    alert("I was clicked");
  }
  render(){
    return(
      <div className="App">
        <h3>{this.state.count}</h3>
        <button onClick={this.Increment}>Increment</button><br></br>
        <button onClick={this.Decrement}>Decrement</button><br></br>
        <button onClick={this.SayWelcome}>Say Welcome</button><br></br>
        <button onClick={this.ClickOnMe}>Click on me</button><br></br>
        <h1 className="heading">Currency Convertor!!</h1>
        <Form/>
      </div>
    )
  }
}
  

export default App;
