import React from 'react';
import product_card from './ProductData';
import './Products.css'
import cart from '../Util/cart'
import Footer from './Footer';

const Products = () => {
    function handleBuy(item, i) {
        cart.addToCart(item)
        let elem = document.getElementById(i)
        elem.style.backgroundColor = "rgb(0,100,0)"
        elem.innerHTML = "Added"
        setTimeout(() => {
            elem.style.backgroundColor = "gray"
            elem.innerHTML = "Add to cart"
        }, 1500)
        console.log(cart.cart)
    }
    const listItems = product_card.map((item, i) => {
        return (
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
                            <button className="btn" id={i} onClick={() => {handleBuy(item, i)}}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    let midpoint = listItems.length / 2
    let column1 = listItems.slice(0, midpoint)
    let column2 = listItems.slice(midpoint)
    return(
        <div className="main_content">
            <h3>Items</h3>
            <div className="row">
                <div className="productColumn">
                    {column1}
                </div>
                <div className="productColumn">
                    {column2}
                </div>
            </div>
            <Footer />
        </div>
        
        
    )
}

export default Products;