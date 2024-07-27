import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [Products , setProducts]= useState([]);
    const [cart, setCart] = useState([]);
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let  totalPrice =0;
    for(let i=0; i<cart.length; i++){
        const prd=cart[i];
         totalPrice = totalPrice + prd.price;
    } 
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        cart.push(product); 
        const newCart = [...cart, product];
        setCart(newCart);   
    }
    return (
        <div className='shop-container'>
            <div  className='Products-container'>
                {
                    Products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>) 
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price : {totalPrice}</p>  
            </div>
        </div>
    );
};

export default Shop;