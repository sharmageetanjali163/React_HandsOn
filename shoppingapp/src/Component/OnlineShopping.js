import React, { Component } from 'react';
import Items from '../Component/Cart';
import './Cart.css';
class OnlineShopping extends Component{
    render(){
        const cartInfo = [
            {itemname: 'Laptop', price: 80000},
            {itemname: 'TV', price:120000},
            {itemname: 'Washing Machine', price:50000},
            {itemname: 'Mobile', price:30000},
            {itemname: 'Fridge', price:70000}
        ];
        return(
            
            <div className="Cart">
                <h1>Items Ordered:</h1>
                <Items cartItems={cartInfo}/>
            </div>
        )
    }
}
export default OnlineShopping;