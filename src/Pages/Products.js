import React from 'react';
import product_card from './ProductData';
import './Products.css'
import cart from '../Util/cart'
import Footer from './Footer';

const Products = () => {
    const listItems = product_card.map((item) => 
    <div className='body'>
        <div className='container'>
            <div className="card" key={item.id}>
                <div className='card_img'>
                    <img className="img" src={item.thumb}></img>
                </div>
                <div className='card_header'>
                    <h2>{item.product_name}</h2>
                    <p>{item.description}</p>
                    <p className="price">{item.price}<span>{item.currency}</span></p>
                    <button className="btn" onClick={() => cart.addToCart(item)}>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    
    
        
    );
    return(
        <div className="main_content">
            <h3>Items</h3>
            {listItems}
            <Footer />
        </div>
        
        
    )
}

export default Products;