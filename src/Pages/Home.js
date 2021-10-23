import React from 'react';
import './Home.css';
import logo from '../Components/Navbar/GeorgiaTechlogo.png';
console.log(logo);
import Navbar from '../Components/Navbar/Navbar';
function Home() {
  return (
    
    <div>
        <div className='home'>
        <div className='wrapper'>
            <div className='banner-text'>
                <div className='text-area'>
                    <h2>Welcome to Golden Jackets!</h2>
                    <h3>A pawn shop for GaTech Students.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

            </div>
        </div>
    </div>
    </div>
    
  );
}

export default Home;