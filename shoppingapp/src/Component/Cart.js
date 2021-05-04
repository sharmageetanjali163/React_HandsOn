import React from 'react';
import './Cart.css';
const Items= props=>{
    let cartitems=props.cartItems.map(item =>{
        return(
            <tr>
                <td>{item.itemname}</td>
                <td>{item.price}</td>
            </tr>
        )
    });
    return(
        
        <table className="table" border="1">
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {cartitems}
        </table>
    )
}
export default Items;