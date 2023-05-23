import React from 'react';
import './CartPage.css'
import CartItem from '../components/CartItem';


function CartPage(props) {
    return (
        <div>
            <samp className='cartPageTitle'>Cart Page</samp>
            <div className='CartDetail'>
                <div className='CartItemNum'>My Shoping Bag</div>
                <div className='CartItemPrice'>Total Price:</div>
            </div>
            <div className='CartItems'>
                <CartItem/>
                <CartItem/>
            </div>
        </div>
    );
}

export default CartPage;