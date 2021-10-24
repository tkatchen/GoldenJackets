import React from 'react';
import reward_info from './RewardData';
import './Products.css'
import cart from '../Util/cart'
import Footer from './Footer';

const Rewards = () => {
    const listItems = reward_info.map((item, i) => {
        return (
            <div className='body'>
                <div className='container'>
                    <div className="card" key={item.id}>
                        <div className='card_img'>
                            <img className="img" src={item.thumb}></img>
                        </div>
                        <div className='card_header'>
                            <h2>{item.hand_name}</h2>
                            <p>{item.description}</p>
                            <p className="price">{item.reward}<span>{item.currency}</span></p>
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
            <h3>Rewards</h3>
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

export default Rewards;