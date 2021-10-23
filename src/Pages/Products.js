import React from 'react';
import product_card from './ProductData';
import './Products.css'

const Products = () => {
    console.log(product_card);
    const listItems = product_card.map((item) => 
    <div className='container'>
        <div className="card" key={item.id}>
            <div className='card_img'>
                <img className="img" src={item.thumb}></img>
            </div>
            <div className='card_header'>
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Add to cart</div>
            </div>
        </div>
    </div>
        
    );
    return(
        <div className="main_content">
            <h3>Items</h3>
            {listItems}
        </div>
    )
}

export default Products;