import React from 'react';
import Cart from '../components/Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cart = useLoaderData();
    return (
        <div className='shop-container'>
            <div>
                <h2>This is the order page, length: {cart.length}</h2>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;