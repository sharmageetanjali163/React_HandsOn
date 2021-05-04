import React, { Component } from 'react';
import './CountPeople.css';
class CountPeople extends Component{
    constructor(){
        super();
        this.state={
            entrycount: 0,
            exitcount: 0,
            c: 0
        };
        
    }
    updateEntry=()=>{
        this.setState({
            entrycount:this.state.entrycount+1
        });
    }

    updateExit=()=>{
        this.setState({
            exitcount:this.state.exitcount+1
        });
    }
    render(){
        return(
            <div className="login">
                <div>
                    <button className="entryButton" onClick={this.updateEntry}>Login</button>
                    <span id="logincount">  {this.state.entrycount}</span>
                    <span> People Entered!!!</span>
                </div>

                <div>
                    <button className="exitButton" onClick={this.updateExit}>Exit</button>
                    <span id="exitcount">  {this.state.exitcount}</span>
                    <span> People Left!!!</span>

                </div>
                
            </div>
            
        )
    }
}
export default CountPeople;