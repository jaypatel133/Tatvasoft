import React, { useEffect ,useState} from 'react';
import './CartPage.css'
import CartItem from '../components/CartItem';
import { useCart } from '../Context/cartContext';

function CartPage(props) {
    const cart = useCart();
    const [cartItems,setCartItems] = new useState()
    const [total,setTotal] = new useState(0);

    useEffect(()=>{
        if(cart?.map)
        {
            let temp = 0
            setCartItems(cart.map(obj=>{
                temp += obj.book.price * obj.quantity
                return <CartItem id={obj.id} name={obj.book.name} bookId={obj.book.id} price={obj.book.price} quantity={obj.quantity} img={obj.book.base64image}/>

            })) 
            setTotal(temp)
        }    
    },[cart])

    // useEffect(()=>{
    //     cart.map(obj=> setTotal(total+(obj.book.price*obj.quantity)) )
    // },[])
    return (
        <div>
            <samp className='cartPageTitle'>Cart Page</samp>
            <div className='CartDetail'>
                <div className='CartItemNum'>My Shoping Bag</div>
                <div className='CartItemPrice'>Total Price: {total}</div>
            </div>
            <div className='CartItems'>
               {cartItems}
            </div>
        </div>
    );
}

export default CartPage;