import React, { Component } from 'react';
export class ListofPlayers extends Component{
    render(){
        const listofPlayers=this.props.playerInfo.map(player=>{
            return(
                <div>
                    <li>Mr. {player.name}<span> {player.score}</span></li>
                </div>
            )
        })
        return(
            <div>
                {listofPlayers}
            </div>
        )
    }
}
export class ListofPlayers70 extends Component{
    render(){
        const listofPlayers70=this.props.playerInfo.map(player=>{
            if(player.score<=70){
                return(
                    <div>
                        <li>Mr. {player.name}<span> {player.score}</span></li>
                    </div>
                )
            }
        })
        return(
            <div>
                {listofPlayers70}
            </div>
        )
    }
}

