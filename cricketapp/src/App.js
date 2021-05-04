import React, { Component } from 'react';
import {EvenPlayers,IndianPlayers,OddPlayers} from './IndianPlayers/IndianPlayers.js';
import ListOfIndianPlayers from './ListOfPlayers/ListOfIndianPlayers.js';
//import EvenPlayers from './IndianPlayers/OddPlayers.js';

import {ListofPlayers,ListofPlayers70} from './ListOfPlayers/ListofPlayers.js';

class App extends Component{
  
    state={
      playerInfo: [
      {name:"virat",score:"100"},
      {name:"rahul",score:"50"},
      {name:"rohit",score:"25"},
      {name:"sikhar",score:"10"},
      {name:"rishab",score:"80"},
      {name:"hardik",score:"75"},
      {name:"shreyas",score:"85"},
      {name:"bhuvi",score:"9"},
      {name:"yuvraj",score:"100"},
      {name:"yuzi",score:"0"},
      {name:"bumrah",score:"6"}
    ]

    
  }
  
  
  render(){
    const IndianTeam=[
      'sachin1',
      'dhoni2',
      'virat3',
      'yuvraj4',
      'bumrah5',
      'rahul6',
    ];
    var flag=false;
    if(flag==true){
    return(
      <div>
        <h1>List of Players</h1>
        
        <ListofPlayers playerInfo={this.state.playerInfo}/>
        <hr/>
        <h1>List of Players having Scores Less than 70</h1>
        <ListofPlayers70 playerInfo={this.state.playerInfo}/>
      </div>
      
    )
    }
    else{
      return(
        <div>
          <div>
            <h1>Odd Players</h1>
            {OddPlayers(IndianTeam)}
            
            <hr/>
            <h1>Even Players</h1>
            {EvenPlayers(IndianTeam)}
            <hr/>

          </div>
          <div>
            <h1>List of Indian Players Merged:</h1>
            <ListOfIndianPlayers IndianPlayers={IndianPlayers}/>
          </div>
        </div>
      )
    }
  }
  
}
export default App;