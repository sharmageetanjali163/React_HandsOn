import React, { Component } from 'react';
class form extends Component{
    Convertor=()=>{
        var amnt=parseInt(document.getElementById("amount").value);
        var curr=document.getElementById("currency").value;
        alert("Converting to "+curr+" Amount is "+amnt*amnt);

    }

    render(){
        return(
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Amount</td>
                            <td><input id="amount" type="number"></input></td>
                        </tr>
                        <tr>
                            <td>Currency</td>
                            <td><textarea id="currency"></textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" onClick={this.Convertor}></input></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

export default form;